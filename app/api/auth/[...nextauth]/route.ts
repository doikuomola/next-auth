import connectToDb from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextResponse } from 'next/server';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '767829718326-p5gta77snntufr3qcsgpb5sca7g9gh5q.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        const { email, name } = user;
        try {
          await connectToDb();

          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch('http://localhost:3000/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                name,
              }),
            });

            if (res.ok) return user;
          }
          return user;
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
});

export { handler as GET, handler as POST };
