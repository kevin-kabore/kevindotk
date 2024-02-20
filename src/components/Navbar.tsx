import React from 'react'
import Link from 'next/link'
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

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-6 z-50 flex justify-between items-center">
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
        {/* Sign in button */}
        <button className="hover:text-gray-300">Sign In</button>
        {/* Sign up button */}
        <button className="hover:text-gray-300">Sign Up</button>
      </div>
    </header>
  )
}

export default Navbar
