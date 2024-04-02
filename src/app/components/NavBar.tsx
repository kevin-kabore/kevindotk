'use client'
import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'
import {DynamicWidget} from '@dynamic-labs/sdk-react-core'

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
const NavBar: React.FC = () => {
  const {data: session} = useSession()
  console.log('session:', session)

  return (
    <nav className="py-4 px-6 z-50 flex justify-between items-center border-solid">
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
            Sign Out
          </button>
        ) : (
          <DynamicWidget />
        )}
      </div>
    </nav>
  )
}

export default NavBar
