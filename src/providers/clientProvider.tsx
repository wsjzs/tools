'use client'

import React, { PropsWithChildren } from 'react'
import { JitsuProvider } from '@jitsu/jitsu-react'
// import { useIsClient } from '@/hooks/common/useIsClient'

export default function ClientProvider({ children }: PropsWithChildren) {
  // const { isClient } = useIsClient()
  // if (!isClient) return <>{children}</>
  return (
    <JitsuProvider
      options={{ host: 'https://clm4aogeo00003b6plc0pfepv.d.jitsu.com' }}
    >
      {children}
    </JitsuProvider>
  )
}
