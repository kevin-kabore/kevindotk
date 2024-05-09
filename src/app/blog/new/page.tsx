import {CreateBlogPost} from '@/app/components/forms/create-blog-post'
import {SessionProvider, DynamicProvider} from '@/app/components/providers'

export default async function NewBlogPage() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">New Blog Post</h1>
      <SessionProvider>
        <DynamicProvider>
          <CreateBlogPost />
        </DynamicProvider>
      </SessionProvider>
    </div>
  )
}
