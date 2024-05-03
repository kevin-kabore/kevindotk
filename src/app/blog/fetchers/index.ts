import useSWR from 'swr'
import {Post} from '@prisma/client'

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json())

export function usePosts() {
  const {data, error, isLoading} = useSWR('/api/posts', fetcher)
  const posts: Post[] | undefined = data?.posts
  return {
    posts,
    isLoading,
    isError: error, // TODO: return error message
  }
}
