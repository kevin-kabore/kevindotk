'use client'
import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'

interface MenuItem {
  title: string
  id?: string
  href?: string
}

interface DropdownMenuProps {
  title: string
  items: MenuItem[]
  openOnHover?: boolean
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  openOnHover = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = () => {
    if (openOnHover) {
      setIsOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (openOnHover) {
      setIsOpen(false)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        onClick={toggleMenu}
        className="hover:text-gray-300"
        onMouseEnter={!openOnHover ? handleMouseEnter : undefined}
        onMouseLeave={!openOnHover ? handleMouseLeave : undefined}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-40 bg-black text-white shadow-md">
          <ul className="py-2">
            {items.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <Link href={item.href}>{item.title}</Link>
                ) : (
                  <button>{item.title}</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
