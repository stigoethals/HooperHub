"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl px-6">
        <form
          className="w-full max-w-md mx-auto flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);
            setLoading(true);
            const form = e.target as HTMLFormElement & {
              email: { value: string };
              password: { value: string };
            };
            const email = form.email.value;
            const password = form.password.value;

            const res = await signIn("credentials", {
              redirect: false,
              email,
              password,
            } as any);

            setLoading(false);

            if (res && (res as any).error) {
              setError("Invalid credentials");
            } else {
              router.push("/app");
            }
          }}
        >
          <h1 className="text-2xl font-semibold">Login</h1>

          {error && <div className="text-red-600">{error}</div>}

          <div className="flex flex-col">
            <label className="text-sm mb-1">Email</label>
            <input name="email" className="w-full rounded border px-3 py-2" type="email" required />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Password</label>
            <input name="password" className="w-full rounded border px-3 py-2" type="password" required />
            <div className="mt-2 text-right">
              <Link href="/forgot-password" className="text-sm text-zinc-600 hover:underline">Forgot password?</Link>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <Link href="/" className="px-4 py-2">Cancel</Link>
            <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-foreground text-background">
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

      </div>
    </main>
  );
}
