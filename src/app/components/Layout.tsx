import React, {ReactNode} from 'react'
import Header from './Header'

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen">
      <Header />
      <main className="text-white min-h-screen">{children}</main>
    </div>
  )
}

export default Layout
