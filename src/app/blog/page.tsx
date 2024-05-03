'use client'
import {usePosts} from './fetchers'
import {Spinner} from '../components/spinner'

export default function BlogPage() {
  const {posts, isLoading, isError} = usePosts()

  let render
  isLoading
    ? (render = <Spinner />)
    : isError
    ? (render = <p>Oh no, something went wrong :(</p>)
    : (render = posts?.map(post => {
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
      }))

  return (
    <div className="flex justify-center">
      <div className="mx-auto">{render}</div>
    </div>
  )
}
