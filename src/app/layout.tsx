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
        <nav className='p-2 flex items-center justify-center'>
          <div className='text-2xl' >gpt.whatfa.com</div>
          <div className='ml-2 text-xs'>免费的chatgpt网址列表</div>
        </nav>
        {children}</body>
    </html>
  )
}
