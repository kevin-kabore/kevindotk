import React from 'react'
import Layout from '@/components/Layout'

const blogPosts = [
  {
    id: 1,
    title: 'First Post',
    date: 'February 19, 2024',
    summary: 'This is a summary of the first post.',
  },
  {
    id: 2,
    title: 'Second Post',
    date: 'February 20, 2024',
    summary: 'This is a summary of the second post.',
  },
  // Add more posts here
]

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <div>
          {blogPosts.map(post => (
            <article key={post.id} className="mb-5">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
              <p>{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
