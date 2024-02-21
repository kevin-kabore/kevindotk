import React from 'react'
import Layout from '@/components/Layout'
import type {GetStaticProps, NextPage} from 'next'
import {Post} from '@prisma/client'

interface BlogPageProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts: Post[] = await res.json()
  return {props: {posts}}
}

const BlogPage: NextPage<BlogPageProps> = ({posts}) => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div>
          {posts.map(post => {
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
    </Layout>
  )
}

export default BlogPage
