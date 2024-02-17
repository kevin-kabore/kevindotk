import React from 'react'
import DropdownMenu from './DropdownMenu'

const HomeDropdownMenu: React.FC = () => {
  const items = [
    {
      title: 'Home',
      onClick: () => (window.location.href = '/'),
    },
    {
      title: 'About',
      id: 'about',
      onClick: () => (window.location.href = '/#about'),
    },
    {
      title: 'Experience',
      id: 'experience',
      onClick: () => (window.location.href = '/#experience'),
    },
    {
      title: 'Interests',
      id: 'interests',
      onClick: () => (window.location.href = '/#interests'),
    },
    {
      title: 'Contact',
      id: 'contact',
      onClick: () => (window.location.href = '/#contact'),
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
        <h1 className="text-lg font-bold">Logo/Home</h1>
        {/* Me dropdown menu */}
        <div className="relative">
          <HomeDropdownMenu />
        </div>
        {/* Blog */}

        <a href="/blog" className="hover:text-gray-300">
          Blog
        </a>
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
