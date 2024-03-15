import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {PrismaAdapter} from '@auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  // session: {
  //   strategy: 'jwt' as const,
  // },
}
// TODO: Fix this type error, it works fine in the app
// @ts-ignore
export default NextAuth(authOptions)
