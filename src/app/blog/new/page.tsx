import {CreateBlogPost} from '@/app/components/forms/create-blog-post'
import SessionProvider from '@/app/components/providers/session'
import {DynamicProvider} from '@/app/components/providers/dynamic'
import {getServerSession} from 'next-auth'
import {authOptions} from '@/auth'

export default async function NewBlogPage() {
  // @ts-ignore
  const session = await getServerSession(authOptions)
  console.log('SESSION:', session)
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">New Blog Post</h1>
      <SessionProvider session={session}>
        <DynamicProvider>
          <CreateBlogPost />
        </DynamicProvider>
      </SessionProvider>
    </div>
  )
}
