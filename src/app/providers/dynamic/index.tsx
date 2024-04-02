'use-client'

import {DynamicContextProvider} from '@dynamic-labs/sdk-react-core'
import {DynamicWagmiConnector} from '@dynamic-labs/wagmi-connector'
import {SolanaWalletConnectors} from '@dynamic-labs/solana'
import {getCsrfToken} from 'next-auth/react'

function DynamicProvider({children}: {children: React.ReactNode}) {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || '',
        walletConnectors: [SolanaWalletConnectors],
        eventsCallbacks: {
          onAuthSuccess: async event => {
            const {authToken} = event

            const csrfToken = await getCsrfToken()

            fetch('/api/auth/callback/credentials', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: `csrfToken=${encodeURIComponent(
                csrfToken as string | number,
              )}&token=${encodeURIComponent(authToken)}`,
            })
              .then(res => {
                if (res.ok) {
                  console.log('LOGGED IN', res)
                  // Handle success - maybe redirect to the home page or user dashboard
                } else {
                  // Handle any errors - maybe show an error message to the user
                  console.error('Failed to log in')
                }
              })
              .catch(error => {
                // Handle any exceptions
                console.error('Error logging in', error)
              })
          },
        },
      }}
    >
      <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
    </DynamicContextProvider>
  )
}

export {DynamicProvider}
