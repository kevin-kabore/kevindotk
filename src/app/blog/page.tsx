'use client'

import * as React from 'react'
import {Post} from '@prisma/client'

export default function BlogPage() {
  const [posts, setPosts] = React.useState<Post[]>([])
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    fetch('http://localhost:3000/api/posts').then(
      res => res.json().then(data => setPosts(data.posts)),
      err => setError(err),
    )
  }, [])

  return (
    <div>
      {posts?.map(post => {
        const createdAt = new Date(post.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        return (
          <article key={post.id} className="mb-5">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{createdAt}</p>
            <p>{post.summary}</p>
          </article>
        )
      })}
    </div>
  )
}
