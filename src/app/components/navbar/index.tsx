'use client'
import type {FC} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
// import {signOut, useSession} from 'next-auth/react'
import {DynamicWidget} from '@dynamic-labs/sdk-react-core'

import {DropdownMenu} from '../dropdown-menu'

const HomeDropdownMenu: FC = () => {
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

export const NavBar: FC = () => {
  const pathname = usePathname()

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
        {pathname === '/blog' && (
          <Link href="/blog/new">
            <button className="hover:text-gray-300">✍️ write</button>
          </Link>
        )}
        <DynamicWidget variant="dropdown" />
      </div>
    </nav>
  )
}
