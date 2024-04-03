'use-client'

import {SessionProvider} from 'next-auth/react'
import {DynamicProvider} from './dynamic'

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <SessionProvider>
      <DynamicProvider>{children}</DynamicProvider>
    </SessionProvider>
  )
}
