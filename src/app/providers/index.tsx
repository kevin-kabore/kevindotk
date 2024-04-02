'use-client'

import {SessionProvider} from 'next-auth/react'
import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core'

import {SolanaWalletConnectors} from '@dynamic-labs/solana'

export function DynamicProvider({children}: {children: React.ReactNode}) {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: 'f39432e3-cd22-4ba2-ae57-7e8222985c48',
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      <DynamicWidget />
      {children}
    </DynamicContextProvider>
  )
}

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <SessionProvider>
      <DynamicProvider>{children}</DynamicProvider>
    </SessionProvider>
  )
}
