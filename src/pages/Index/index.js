import React from 'react';
import styles from './index.module.scss'
import video from '../../assets/video/happy.mp4'
import {Table} from 'antd'
export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  
  //static defaultProps = {
  //  name: 'Mary'  //定义defaultprops的另一种方式
  //}
  
  //static propTypes = {
    //name: React.PropTypes.string
  //}

  componentDidMount () {
  }
  
  handleClick() {
    //点击事件的处理函数
  }

  render() {
    return (
      <div className={styles.content}>
        <div className={styles.head}>
        
        </div>
        {/* <video controls className={styles.video}>
            <source src={video} type="video/mp4" />
            -您的浏览器不支持 video 标签-
        </video> */}
      </div>
    )
  }
}