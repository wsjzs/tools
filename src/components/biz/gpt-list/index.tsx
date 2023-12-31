import Image from 'next/image'
import Link from 'next/link'

const list = [
  {
    icon: 'https://ice.frostsky.com/2023/09/04/a2e967cc37aa33c435023975c0b04d4f.png',
    url: 'https://yiyan.baidu.com/',
    title: '文心一言（国产可用）',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://free.localhost6.com',
    title: 'localhost6（亲测可用）',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://free.anzz.top/zh',
    title: 'Anzz.top（亲测可用）',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://l922h.aitianhu.fit/',
    title: 'aitianhu（亲测可用）',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://c.binjie.fun/',
    title: 'AIchatOS',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://ai.usesless.com',
    title: '小莓用AI',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://chat.wuguokai.cn',
    title: 'wuguokai(需科学上网)',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'http://wea.zw7.lol',
    title: 'TDChat（亲测可用）',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://chat.aicaige.com/',
    title: 'aicaige',
  },
]

const GptList = () => (
  <section className='max-w-lg  w-full mx-auto mt-3'>
    <h2 className='text-center mb-3'>
      有些站点需科学上网
    </h2>
    <ul className='w-full'>
      {
        list.map(item => (
          <li key={item.url} className='w-full mt-2'>
            <Link href={item.url} target='_blank'>
              <div className="flex justify-between items-center bg-neutral-50 dark:bg-neutral-800 p-2 rounded-lg">
                <div className='flex items-center'>
                  <div className='relative w-10 h-10 rounded-lg overflow-hidden dark:bg-slate-100 '>
                    <Image objectFit="contain" layout="fill" src={item.icon} alt={item.title}/>
                  </div>
                  <p className='ml-2 text-base'>{item.title}</p>
                </div>
                <p className='text-xs sm:text-sm text-sky-600'>点击访问&gt;</p>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>

  </section>

)

export default GptList