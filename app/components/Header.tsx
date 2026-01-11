"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const session = useSession();
  const router = useRouter();

  const handleOpenApp = () => {
    if (session.status === "authenticated") {
      router.push("/app");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between py-4 px-16">
          <Link href="/" className="text-lg font-bold text-black">HooperHub</Link>

          <div className="flex items-center gap-3">
            <Link href="/docs" className="text-sm font-medium text-zinc-950 hover:underline">Docs</Link>
            <button
              onClick={handleOpenApp}
              className="flex h-8 items-center justify-center gap-2 rounded-full bg-foreground px-3 text-sm text-background transition-colors hover:bg-[#383838]"
            >
              Open App
            </button>
            {session.status === "authenticated" && (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm ml-2"
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
