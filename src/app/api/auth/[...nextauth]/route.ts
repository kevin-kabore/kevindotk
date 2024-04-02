import NextAuth from 'next-auth'
import type {AuthOptions} from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import type NextAuthConfig from 'next-auth'

import Credentials from '@auth/core/providers/credentials'
import {validateJWT} from '@/app/lib/authHelpers'
import {User} from '@prisma/client'

import {PrismaAdapter} from '@auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

// export const authOptions = {
//   providers: [],

//   // session: {
//   //   strategy: 'jwt' as const,
//   // },
// }
// // TODO: Fix this type error, it works fine in the app
// // @ts-ignore
// const handler = NextAuth(authOptions)

// export {handler as GET, handler as POST}

export const authOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-ignore
    Credentials({
      name: 'Credentials',
      credentials: {
        token: {label: 'Token', type: 'text'},
      },
      async authorize(
        credentials: Partial<Record<'token', unknown>>,
        request: Request,
      ): Promise<User | null> {
        const token = credentials.token as string // Safely cast to string; ensure to handle undefined case
        if (typeof token !== 'string' || !token) {
          throw new Error('Token is required')
        }
        const jwtPayload = await validateJWT(token)

        if (jwtPayload) {
          // Transform the JWT payload into your user object
          const user = {
            id: jwtPayload.sub, // Assuming 'sub' is the user ID
            name: jwtPayload.name || '', // Replace with actual field from JWT payload
            email: jwtPayload.email || '', // Replace with actual field from JWT payload
            // Map other fields as needed
          }
          return user as User
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    // @ts-ignore
    authorized({request, auth}: {request: any; auth: any}) {
      //
      const {pathname} = request.nextUrl
      if (pathname === '/middleware-example') return !!auth
      return true
    },
  },
} satisfies AuthOptions

// @ts-ignore
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
