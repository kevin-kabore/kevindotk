import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const posts = await prisma.post.findMany()
  return Response.json({posts})
}

export async function POST({request}) {
  const body = await request.json()
  const post = await prisma.post.create({data: body})
  return Response.json({post})
}
