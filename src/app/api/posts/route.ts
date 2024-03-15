import {PrismaClient} from '@prisma/client'
import type {NextApiRequest, NextApiResponse} from 'next'

const prisma = new PrismaClient()

export async function GET() {
  const posts = await prisma.post.findMany()
  return Response.json({posts})
}
