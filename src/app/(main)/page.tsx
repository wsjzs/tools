import GptList from '@/components/biz/gpt-list'

export default function Home() {
  return (
    <main className="flex-grow-0 flex-col items-center justify-between p-2">
      <GptList />
      <div className='fixed bottom-0 h-36 w-full text-center'>

        <a href='https://qm.qq.com/q/a27GSfpTvG' className='text text-blue-400 hover:text-blue-500'> 加入qq群聊【AI-ChatGPT】: 808058669</a>
      </div>
    </main>
  )
}
