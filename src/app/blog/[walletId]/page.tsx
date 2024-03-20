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
      <h1 className="text-4xl font-bold mb-4">Walelt ID: {params.walletId}</h1>
      <div>TODO: Lust of Wallet ID posts</div>
    </div>
  )
}
