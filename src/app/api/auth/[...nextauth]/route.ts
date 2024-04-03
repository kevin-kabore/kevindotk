import NextAuth from 'next-auth'
import Credentials from '@auth/core/providers/credentials'
import {validateJWT} from '@/app/lib/authHelpers'
import {PrismaAdapter} from '@auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'

import type {NextAuthOptions} from 'next-auth'
import type {Adapter} from 'next-auth/adapters'
import type {User} from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
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
          // TODO: associate user details and wallet address
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
      const {pathname} = request.nextUrl
      if (pathname === '/middleware-example') return !!auth
      return true
    },
  },
} satisfies NextAuthOptions

// @ts-ignore
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
