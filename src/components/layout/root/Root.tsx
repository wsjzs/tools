'use client'

import { FC, PropsWithChildren } from 'react'
import { useJitsuPage } from '@/hooks/common/useJitsuPage'

export const Root: FC<PropsWithChildren> = ({ children }) => {
  useJitsuPage()
  return (
    <>
      {children}
    </>
  )
}
