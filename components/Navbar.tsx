'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const { status } = useSession();

  console.log(status);
  return (
    <nav className="max-w-3xl mx-auto flex justify-between items-center h-20 shadow-md px-4">
      <Link href="/" className="font-bold text-lg text-blue-700">
        DavCoding
      </Link>
      {status === 'authenticated' ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn('google')}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </nav>
  );
}
