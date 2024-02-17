import React, {ReactNode} from 'react'
import Navbar from './Navbar'

const Layout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  )
}

export default Layout
