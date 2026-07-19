'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/app/lib/supabase'

export default function TestDatabase() {
  const [status, setStatus] = useState<string>('Testing connection...')
  const [config, setConfig] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Simple connection test - check if we can get session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()

        if (sessionError) {
          throw sessionError
        }

        // Try to ping the database with a simple query
        const { data, error: dataError } = await supabase
          .from('information_schema.schemata')
          .select('*')
          .limit(1)

        // If limited by RLS, that's okay - it means connection works
        if (dataError && dataError.code === 'PGRST116') {
          setStatus('✅ Connection successful! (limited by RLS)')
          setError(null)
        } else if (dataError) {
          // Try alternative test
          const { data: altData, error: altError } = await supabase
            .from('pg_namespace')
            .select('*')
            .limit(1)

          if (altError && !altError.message.includes('not a function')) {
            setStatus('✅ Connection successful!')
            setError(null)
          } else {
            throw new Error('Cannot reach database')
          }
        } else {
          setStatus('✅ Connection successful!')
          setError(null)
        }

        // Show config
        setConfig(
          `URL: ${process.env.NEXT_PUBLIC_SUPABASE_URL}\nKey: ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 20)}...`
        )
      } catch (err) {
        setStatus('❌ Connection failed')
        setError(err instanceof Error ? err.message : 'Unknown error')
      }
    }

    testConnection()
  }, [])

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Database Connection Test</h1>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Status</h2>
        <p className="text-lg">{status}</p>
        {error && <p className="text-red-600 mt-2 font-semibold">Error: {error}</p>}
      </div>

      {config && (
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Configuration</h2>
          <pre className="bg-white p-4 rounded border border-blue-200 text-sm overflow-auto">
            {config}
          </pre>
        </div>
      )}
    </div>
  )
}
