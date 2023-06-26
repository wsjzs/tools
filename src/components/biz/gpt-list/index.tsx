const list = [{
  icon: 'https://mjj.today/i/IKxlvJ',
  url: 'https://chat.jinshutuan.com/#/chat/1687100551376',
  title: 'jinshutuan',
}]

const GptList = () => (
  <section>
    <p><a href="https://chat.jinshutuan.com/#/chat/1687100551376" target="_blank">jinshutuan</a></p>
    <ul>
      {
        list.map(item => (
          <li key={item.url}>
            <div className="flex">
              <img src={item.icon}></img>
              <p>{item.title}</p>
              <a>点击访问</a>
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
