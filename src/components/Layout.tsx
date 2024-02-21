import React, {ReactNode} from 'react'
import Navbar from './Navbar'

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen">
      <Navbar />
      <main className="text-white min-h-screen">{children}</main>
    </div>
  )
}

export default Layout
