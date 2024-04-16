'use client'

import {ChangeEvent, useState, useCallback, FormEvent} from 'react'
import {Post} from '@prisma/client'

const CreateBlogPost: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value)
    },
    [],
  )

  const handleContentChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(event.target.value)
    },
    [],
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({title, content})
  }
  return (
    <form
      className="w-full max-w-xl px-5 py-4 shadow-md rounded"
      onSubmit={handleSubmit}
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
          id="title"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleTitleChange}
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
          name="content"
          placeholder="what's on your mind? 🤔..."
          value={content}
          onChange={handleContentChange}
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
  )
}

export {CreateBlogPost}
