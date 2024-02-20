const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      name: 'Kevin Kabore',
      email: 'kevin@example.com',
    },
  })

  // Create another user for comments and likes
  const jane = await prisma.user.create({
    data: {
      name: 'Jane Doe',
      email: 'jane@example.com',
    },
  })

  // Create a post
  const post = await prisma.post.create({
    data: {
      title: 'First Post',
      content: 'This is the content of the first post.',
      summary: 'This is a summary of the first post.',
      authorId: user.id,
    },
  })

  // Add comments to the post
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

  // User likes the post
  await prisma.like.create({
    data: {
      postId: post.id,
      authorId: jane.id,
    },
  })

  // Optionally, add views to the post by updating it
  await prisma.post.update({
    where: {id: post.id},
    data: {views: 1}, // You can increase this based on your needs
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
