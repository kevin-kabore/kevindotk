'use client'
import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession} from 'next-auth/react'
import {usePrivy} from '@privy-io/react-auth'

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
  const privy = usePrivy()
  const {login, logout, authenticated, ready, user} = privy

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-4 px-6 z-50 flex justify-between items-center border-solid">
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
      {authenticated ? (
        <button onClick={() => logout()}>log out</button>
      ) : (
        <button onClick={() => login()}>login</button>
      )}
      <div className="flex items-center space-x-4">
        {session ? (
          <button className="hover:text-gray-300" onClick={() => signOut()}>
            Sign In
          </button>
        ) : (
          <button className="hover:text-gray-300" onClick={() => signIn()}>
            Sign Out
          </button>
        )}
      </div>
    </nav>
  )
}

export default NavBar
