"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Forgot password</h1>
        <p className="text-zinc-600 mb-4">Enter your email and we'll send a password reset link (this is a placeholder page).</p>

        <form className="flex flex-col gap-3">
          <label className="text-sm">Email</label>
          <input className="w-full rounded border px-3 py-2" type="email" required />

          <div className="flex justify-end gap-3">
            <Link href="/login" className="px-4 py-2">Cancel</Link>
            <button className="px-4 py-2 rounded bg-foreground text-background">Send reset</button>
          </div>
        </form>
      </div>
    </main>
  );
}
