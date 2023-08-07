import connectToDb from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const clientId = process.env.GOOGLE_CLIENT_ID as string;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
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
