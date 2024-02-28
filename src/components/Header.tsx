import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'
import DropdownMenu from './DropdownMenu'

const HomeDropdownMenu: React.FC = () => {
  const items = [
    {
      title: 'About',
      id: 'about',
      href: '/#about',
    },
    {
      title: 'Experience',
      id: 'experience',
      href: '/#experience',
    },
    {
      title: 'Interests',
      id: 'interests',
      href: '/#interests',
    },
    {
      title: 'Contact',
      id: 'contact',
      href: '/#contact',
    },
  ]
  return <DropdownMenu title="Me" items={items} openOnHover />
}

const Header: React.FC = () => {
  const {data: session} = useSession()
  return (
    <header className="w-full text-white py-4 px-6 z-50 flex justify-between items-center border-solid ">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        {/* Logo/Home */}
        <Link href="/">
          <h1 className="text-lg font-bold cursor-pointer">Logo/Home</h1>
        </Link>
        {/* Me dropdown menu */}
        <div className="relative">
          <HomeDropdownMenu />
        </div>
        {/* Blog */}
        <Link href="/blog">Blog</Link>
      </div>
      {/* Right section */}
      <div className="flex items-center space-x-4">
        {session ? (
          <button className="hover:text-gray-300" onClick={() => signOut()}>
            Sign Up
          </button>
        ) : (
          <button className="hover:text-gray-300" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
