'use client'

import {useForm, SubmitHandler} from 'react-hook-form'
import {useUserWallets, useDynamicContext} from '@dynamic-labs/sdk-react-core'

interface Inputs {
  title: string
  content: string
  authorId: string
  walletId: string
  walletAddress: string
}

const CreateBlogPost: React.FC = () => {
  const {user} = useDynamicContext()
  const {register, handleSubmit} = useForm<Inputs>()
  const wallets = useUserWallets()

  const onSubmit: SubmitHandler<Inputs> = data => {
    const {title, content} = data
    const firstWallet = wallets[0] ?? {}
    const walletId = firstWallet?.id
    const walletAddress = firstWallet?.address

    const body = {
      title,
      content,
      authorId: user?.userId,
      walletId,
      walletAddress,
    }
    fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(body),
    }).then(
      resp => {
        if (!resp.ok) {
          throw new Error('Oops something went wrong.')
        }

        return resp.json()
      },
      err => err,
    )
  }

  // console.log('watch title: ', watch('title'))
  return (
    <div>
      <form
        className="w-full max-w-xl px-5 py-4 shadow-md rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-8">
          <label
            className="block text-700 text-xl font-bold mb-2"
            htmlFor="title"
            hidden
          >
            Title
          </label>
          <input
            className="text-slate-700 w-full py-2 px-3 text-xl font-semibold placeholder-gray-400 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
            type="text"
            placeholder="title"
            {...register('title', {required: true})}
          />
        </div>
        <div className="mp-8">
          <label
            className="block text-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="text-slate-700 w-full p-3 text-base placeholder-gray-400 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
            id="content"
            placeholder="what's on your mind? 🤔..."
            {...register('content', {required: true})}
          />
        </div>
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  )
}
export {CreateBlogPost}
