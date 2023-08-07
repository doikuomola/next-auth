'use client';

import React from 'react';
import { SignInBtn } from '.';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="shadow-xl p-8 rounded-lg flex flex-col gap-3 bg-yellow-300">
        <Image
          width={50}
          height={50}
          src={session?.user?.image as string}
          alt=""
          className='object-cover object-center rounded-full'
        />
        <div className="">
          <p className="">
            Name: <span className='font-bold'>{session?.user?.name}</span>
          </p>
          <p className="">
            Email: <span className='font-bold'>{session?.user?.email}</span>
          </p>
        </div>
      </div>
    );
  }
  return <SignInBtn />;
}
