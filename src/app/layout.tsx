import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GPT whatfa',
  description: '免费ChatGPT,free gpt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <nav className='p-2 flex'>
          <div >GPT whatfa</div>
          <div className='flex-grow text-center'>免费的chatgpt网址列表</div>
        </nav>
        {children}</body>
    </html>
  )
}
