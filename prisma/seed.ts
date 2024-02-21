import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Kevin Kabore',
      email: 'kevin@example.com',
    },
  })

  const jane = await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
  })

  const post = await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the content of the first post.',
      summary: 'This is a summary of the first post.',
      authorId: user.id,
    },
  })

  await prisma.comment.create({
    data: {
      content: 'Great post!',
      postId: post.id,
      authorId: jane.id,
    },
  })

  await prisma.comment.create({
    data: {
      content: 'Looking forward to more content.',
      postId: post.id,
      authorId: user.id,
    },
  })

  await prisma.like.create({
    data: {
      postId: post.id,
      authorId: jane.id,
    },
  })

  await prisma.post.update({
    where: {id: post.id},
    data: {views: 1},
  })

  const secondPost = await prisma.post.create({
    data: {
      title: 'Second Post',
      content: 'This is the content of the second post.',
      summary: 'This is a summary of the second post.',
      authorId: jane.id,
    },
  })

  await prisma.comment.create({
    data: {
      content: 'Great second post!',
      postId: secondPost.id,
      authorId: user.id,
    },
  })

  await prisma.like.create({
    data: {
      postId: secondPost.id,
      authorId: user.id,
    },
  })

  await prisma.post.update({
    where: {id: secondPost.id},
    data: {views: 2},
  })

  console.log('Seed data added!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
