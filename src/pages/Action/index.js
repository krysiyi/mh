import React from 'react';
import styles from './index.module.scss'
import touxiang from '../../assets/image/touxiang.jpg'
import clean from '../../assets/image/clean.jpg'
import huyang from '../../assets/image/huyang.jpg'
import tie from '../../assets/image/tie.jpg'
import yiqing from '../../assets/image/yiqing.jpg'
import tborder from '../../assets/image/title.png'
import beiyan from '../../assets/image/beiyan.jpg'
import zongdu from '../../assets/image/zongdu.png'
import zd from '../../assets/image/zd.png'
import naihu from '../../assets/image/naihu.jpg'
import three from '../../assets/image/three.png'
import xds from '../../assets/image/xds.png'
import by from '../../assets/video/beiyan.mp4'
import hy from '../../assets/video/huyang.mp4'
import gj from '../../assets/video/clean.mp4'
import './index.css'
export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      action: false,
      current: '',
      title: 'week'
    }
  }
  
  //static defaultProps = {
  //  name: 'Mary'  //定义defaultprops的另一种方式
  //}
  
  //static propTypes = {
    //name: React.PropTypes.string
  //}

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        action: true
      })
    },10000)
  }
  
  handleClick = {
    info: (e) => {
      e.persist()
      this.setState({
        title: e.target.dataset.title
      })
    },
    current: (e) => {
      this.setState({
        current: e.target.dataset.name
      })
    },
    weibo: () => {
      window.open('https://weibo.com/mouhuanjun?is_hot=1')
    },
    bili: () => {
      window.open('https://space.bilibili.com/1577804/')
    },
    net: () => {
      window.open('https://music.163.com/#/user/home?id=429961762')
    },
    link: () => {
      window.open('https://live.bilibili.com/271744')
    }
  }

  render() {
    const {action, title, current} = this.state
    console.log(current)
    return (
      action
      ?
      <div className={styles.room}>
        <div className={styles.head}>
          <ul className={styles.nav}>
            <li className={styles.mh}>某幻君</li>
            <li onClick={this.handleClick.weibo}>微博</li>
            <li onClick={this.handleClick.bili}>B站</li>
            <li onClick={this.handleClick.net}>网易云</li>
            <li onClick={this.handleClick.link}>271744</li>
          </ul>
          <div className={styles.todo}>
          <p>吾日三省吾身：</p>
          <img src={three} alt='' />
          </div>
        </div>
        <div className={styles.content}>
          <section className={styles.player}>
            <div className={styles.bg}>
              <div className={styles.bgc}>
                <div className={styles.img}></div>
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.title}>
                <img src={touxiang} alt='' />
                <div className={styles.gift}>
                  <div className={styles.up}>
                    <div className={styles.tag}>轮播</div>
                    <span>编程真光头的生日祝福</span>
                  </div>
                  <div className={styles.down}>
                  <div className={styles.tag}>UP40</div>
                  <span>小光头呀</span>                  
                  </div>
                </div>
              </div>
                {current==='clean'&&
                <video controls className={styles.video}>
                  <source src={gj} type="video/mp4" />
                  -您的浏览器不支持 video 标签-
                </video>}
                {current==='huyang'&&
                <video controls className={styles.video}>
                  <source src={hy} type="video/mp4" />
                  -您的浏览器不支持 video 标签-
                </video>}
                
                {current==='yanbei'&&
                <video controls className={styles.video}>
                  <source src={by} type="video/mp4" />
                  -您的浏览器不支持 video 标签-
                </video>}
                
                {current.length===0&&<video controls className={styles.video}>
                  <source src={''} type="video/mp4" />
                  -您的浏览器不支持 video 标签-
                </video>}
              
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.flag}>点击赠送干净</div>
                  <img src={clean}  data-name='clean' alt='' onClick={this.handleClick.current} />
                  <span>天空之翼</span>
                </div>
                <div className={styles.item}>
                <div className={styles.flag}>点击赠送北沿</div>
                  <img src={beiyan} data-name='yanbei' alt='' onClick={this.handleClick.current} />
                  <span>节奏风暴</span>
                </div>
                <div className={styles.item}>
                <div className={styles.flag}>点击赠送一柯胡杨</div>
                  <img src={huyang} data-name='huyang' alt='' onClick={this.handleClick.current} />
                  <span>摩天大楼</span>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.info}>
                <ul className={styles.nav} onClick={this.handleClick.info}>
                <li data-title='week' className={title==='week'?styles.active:''}>七日榜</li>
                <li data-title='ship' className={title==='ship'?styles.active:''}>舰队</li>
                <li data-title='love' className={title==='love'?styles.active:''}>友爱社</li>
                </ul>
                <br/>
                <div className={styles.desc}>
                  {
                    title==='week'
                    ?
                    '每一个七日都有小光头陪伴'
                    :
                    title==='ship'
                    ?
                    '某幻领航，我们的舰队越来越强大'
                    :
                    '我们之间都有默契'
                  }
                </div>
              </div>
              <div className={styles.notice}>
                <div className={styles.zongdu}>
                  <img src={zongdu} alt='' />
                  <p><span>某幻君</span>在<span>小光头</span>的房间开通了总督,就是这么宠粉丝，哼</p>
                </div>
                <div className={styles.enter}>
                欢迎 <img src={zd} alt='' /> <span> 某幻君 </span>进入直播间
                </div>
                <div className={styles.xds}>
                <img src={xds} alt='' />
                  <p>全区广播：<span>某幻君</span>送给<span>小光头</span>所有的小电视，所有小光头一人一个，我某幻君就是这么宠粉</p>
                </div>
              </div>
              <div className={styles.text}>
               <img src={tborder} alt='' />
               <input placeholder='时间太赶，不能输入弹幕~' />
               <div className={styles.tags}>
                  <div className={styles.card}>舰</div>
                  <div className={styles.card}>爷</div>
                  <div className={styles.card}>勋</div>
                  <div className={styles.card}>衔</div>
                  <button>发送</button>
               </div>
              </div>
            </div>
          </section>

          <div className={styles.wish}>
            <div className={styles.one}>
              <div className={styles.cover}>
                <img src={tie} alt='' />
                <span>铁铁</span>
              </div>
              <p>生日的漂亮男孩，希望在这崭新的一年里，你有更多的收获，我们陪你一起在新的环境努力奋斗，做更多更优秀的作品～
                <br/>相信自己！你真的很棒!大哥～生日快乐(｀・ω・´)
                <br/>
                （PS:时间不够，网页写的一般，答应你的一定给你，下次给你更好的作品）
              </p>
            </div>
            <div className={styles.one}>
              <div className={styles.cover}>
                <img src={yiqing} alt='' />
                <span>逸青</span>
              </div>
              <p>大哥要天天开心，做自己想做的事  游戏技术越来越棒，事业有成，做出来视频有更多的人看</p>
            </div> 
            <div className={styles.one}>
              <div className={styles.cover}>
                <img src={clean} alt='' />
                <span>干净</span>
              </div>
              <p>希望大哥在新的一岁里干干净净、健健康康、发量浓密！嘿嘿～也要多运动减减肥；多出门走走看看大千世界；要少熬点夜，别像我们一样头发都掉光了|･ω･｀)最后～祝我们的15岁小男孩生日快乐！！</p>
            </div> 
            <div className={styles.one}>
              <div className={styles.cover}>
                <img src={beiyan} alt='' />
                <span>北沿</span>
              </div>
              <p>大哥，生日快乐，愿视频越做越棒，人气越来越高，人越来越帅！虽然不常出现，但一定在！</p>
            </div>
            <div className={styles.one}>
              <div className={styles.cover}>
                <img src={huyang} alt='' />
                <span>一柯胡杨</span>
              </div>
              <p>To 今天最大的大哥:
大哥生日快乐！！超~开心认识你，还有这群xgt
很庆幸在某天点开了你的视频，又在某天晚上点开了你的直播，从此一入幻坑(？)深似海。来的很晚，还有一个多月才算是真正粉上你的一周年。错过了很多，但至今也收获了很多，不论是快乐还是其他。
新的一岁，祝你每天都可以睡个大懒觉(自然醒的那种)，立马拥有八块腹肌(不存在的)，每天都可以做个好梦，沙雕快乐每一天！！！我会每一个明天都喜欢你，支持你，冲鸭</p>
            </div>
            <div className={styles.one}>
              <div className={styles.cover}>
                <img src={naihu} alt='' />
                <span>奶糊</span>
              </div>
              <p>To:大哥~最幸运的事就是在17年遇见你~然后成都漫展去看了你（真的真的超帅超帅！）真的真的很幸运很幸运，陪你度过了快俩年了（四入五也入就是俩年！）陪你度过了一个又一个百万，俩生日了~感慨啊~你过完这个生日就不能叫14岁了！记住你是15岁了！15！！！最后祝大鸽（划掉）大哥！生日快乐！天天开心！福如东海寿比南山！（好像怪怪的……不管了！）祝大哥吃嘛嘛香，身体倍棒！</p>
            </div>
          </div>
        </div>
        <p className={styles.about}>
        视频：干净、北沿、一柯胡杨&nbsp;&nbsp;||&nbsp;&nbsp;网页制作：铁铁
        </p>
      </div>
      :
      <div className="body">
        <div id="ui">
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
          <div className="text">HAPPY BIRTHDAY MH</div>
        </div>
      </div>
    )
  }
}