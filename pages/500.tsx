import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Custom500() {
  return (
    <main className="px-4 flex h-screen justify-center items-center">
      <div className="text-center text-lg text-zinc-900">
        <Image src="/favicon.ico" alt="Logo" width={20} height={20} className="mx-auto" />
        <h1 className="my-8 text-zinc-50">500 | Internal Server Error</h1>
        <Link href="/" className="btn text-base">
          Return to home
        </Link>
      </div>
    </main>
  );
}
