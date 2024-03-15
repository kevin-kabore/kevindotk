'use client'
import {useEffect, useState} from 'react'
import {Post} from '@prisma/client'

export default function Blog({params}: {params: {walletId: string}}) {
  const [posts, setPosts] = useState<Post[]>([])
  console.log('posts:', posts)

  useEffect(() => {
    fetch('http://localhost:3000/api/posts').then(res =>
      res.json().then(res => setPosts(res.posts)),
    )
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div>
        {posts?.map(post => {
          const createdAt = new Date(post.createdAt).toLocaleDateString(
            'en-US',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          )
          return (
            <article key={post.id} className="mb-5">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{createdAt}</p>
              <p>{post.summary}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
