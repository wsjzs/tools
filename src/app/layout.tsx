import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Baidu from '@/components/baidu'
import { Footer } from '@/components/layout/footer/footer'
import { ClientProvider } from '@/providers'
import { Root } from '@/components/layout/root/Root'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title: 'GPT whatfa',
  description: '免费ChatGPT,free gpt',
  // @ts-ignore
  referrer: 'unsafe-url',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <Baidu/>
      </head>
      <body className={inter.className}>
        <ClientProvider>
          <Root>
            <Header/>
            {children}
            <Footer />
          </Root>
        </ClientProvider>
      </body>
    </html>
  )
}
