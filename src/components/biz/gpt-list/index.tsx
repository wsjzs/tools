import Image from 'next/image'
import Link from 'next/link'

const list = [{
  // icon: 'https://mjj.today/i/IKxlvJ',
  icon: 'https://chat.jinshutuan.com/favicon.svg',
  url: 'https://chat.jinshutuan.com/#/chat/1687100551376',
  title: 'jinshutuan',
}]

const GptList = () => (
  <section>
    <ul>
      {
        list.map(item => (
          <li key={item.url}>
            <div className="flex justify-between items-center">
              <div className='flex items-center'>
                <Image src={item.icon} width={40} height={40} alt={item.title}/>
                <p>{item.title}</p>
              </div>
              <Link href={item.url}>点击访问</Link>
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
