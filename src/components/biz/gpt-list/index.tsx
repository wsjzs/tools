import Image from 'next/image'
import Link from 'next/link'

const list = [{
  icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
  url: 'https://chat.jinshutuan.com/#/chat/1687100551376',
  title: 'jinshutuan',
}]

const GptList = () => (
  <section className='max-w-lg  w-full mx-auto mt-3'>
    <ul className='w-full'>
      {
        list.map(item => (
          <li key={item.url} className='w-full'>
            <div className="flex justify-between items-center bg-neutral-50 p-4 rounded-lg">
              <div className='flex items-center'>
                <Image className='rounded-lg' src={item.icon} width={40} height={40} alt={item.title}/>
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
