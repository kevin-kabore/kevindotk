import {CreateBlogPost} from '@/app/components/forms/create-blog-post'

const NewBlogPage: React.FC = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">New Blog Post</h1>
      <CreateBlogPost />
    </div>
  )
}

export default NewBlogPage
