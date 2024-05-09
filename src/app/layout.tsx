import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {NavBar} from '@/app/components/navbar'
import '../../styles/globals.css'

const inter = Inter({subsets: ['latin']})

const metadata: Metadata = {
  title: 'Kevindotk',
  description: 'Welcome to my site 🤝',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
          <NavBar />
          <main className="flex-1 px-4 py-4 sm:px-6 md:py-6">{children}</main>
          <footer className="h-16 flex items-center justify-center">
            Footer
          </footer>
        </div>
      </body>
    </html>
  )
}
