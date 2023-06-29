import Image from 'next/image'
import Link from 'next/link'

const list = [
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://chat.jinshutuan.com/#/chat/1687100551376',
    title: 'jinshutuan',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://ai.usesless.com',
    title: '小莓用AI',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://chat.wuguokai.cn',
    title: 'wuguokai',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/2df123d6fd81e29192d0e4ccb94fda25.jpeg',
    url: 'https://chat.scorpii.net/',
    title: 'zchat（免费，靠广告活着）',
  },
]

const GptList = () => (
  <section className='max-w-lg  w-full mx-auto mt-3'>
    <ul className='w-full'>
      {
        list.map(item => (
          <li key={item.url} className='w-full mt-2'>
            <div className="flex justify-between items-center bg-neutral-50 dark:bg-neutral-800  p-4 rounded-lg">
              <div className='flex items-center'>
                <div className='relative w-10 h-10 rounded-lg overflow-hidden dark:bg-slate-100 '>
                  <Image objectFit="contain" layout="fill" src={item.icon} alt={item.title}/>
                </div>
                <p className='ml-2 text-base'>{item.title}</p>
              </div>
              <Link className='text-base text-sky-600' href={item.url} target='_blank'>点击访问&gt;</Link>
            </div>
          </li>
        ))
      }
    </ul>

  </section>

)

export default GptList
// /*title*/

// left: 0px;
// top: 0px;
// width: 600px;
// height: 56px;
// opacity: 1;
// display: flex;

// /** 文本1 */
// font-size: 48px;
// font-weight: 700;
// letter-spacing: 0px;
// line-height: 56px;
// color: rgba(29, 33, 41, 1);
// text-align: left;
// vertical-align: top;
