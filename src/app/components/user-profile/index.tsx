'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {DynamicWidget} from '@dynamic-labs/sdk-react-core'

export function UserProfile() {
  const pathname = usePathname()

  return (
    <div className="flex items-center space-x-4">
      {pathname === '/blog' && (
        <Link href="/blog/new">
          <button className="hover:text-gray-300">✍️ write</button>
        </Link>
      )}
      <DynamicWidget variant="dropdown" />
    </div>
  )
}
