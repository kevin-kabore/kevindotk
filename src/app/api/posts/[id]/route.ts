import {PrismaClient} from '@prisma/client'
import {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
const prisma = new PrismaClient()

export async function POST() {
  // write to db
}

export async function GET(request: Request, context: {params: Params}) {
  const id = context.params.id // '1'
  // read from db
  const post = await prisma.post.findUnique({
    where: {id: Number(id)},
  })
  // console.log('post:', post)
  // console.log('Response.json({post}):', Response.json({post}))
  return Response.json({post})
}
