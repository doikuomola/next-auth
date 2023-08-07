'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

export default function SignInBtn() {

  return (
    <button onClick={()=>signIn('google')} className="flex items-center gap-2 shadow-xl rounded-lg pl-3">
      <Image
        width={30}
        height={30}
        src={'/google-logo.png'}
        alt="google logo"
      />
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign In With Google
      </span>
    </button>
  );
}
