import React from 'react';
import styles from './index.module.scss'
import video from '../../assets/video/happy.mp4'
import axios from 'axios'
import {Table} from 'antd'
import { isString } from 'util';
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
    const request = []
    let list = []
    for (let i = 1; i<28; i++) {
      // eslint-disable-next-line no-loop-func
      request.push( new Promise((resolve, reject) => {
        axios.get(`/guard/topList?roomid=271744&page=${i}&ruid=1577804`)
        .then((res) => {
          let data = res.data.data.list
          if (i===1) {
            const cache = []
            res.data.data.top3.forEach(item => {
              let newItem = item
              newItem.rank = item.rank-3
              cache.push(newItem)
            })
            resolve(cache.concat(data))
          }
          resolve(data)
        })
        .catch(function (error) {
          reject(error)
        });
      }))
    }
    Promise.all(request).then((data)=>{
      const uid = 15516050
      data.forEach((item, index) => {
        const current = item.map(elem => {
          elem.key = elem.uid
          elem.rank = index*10+elem.rank+3
          return elem
        })
        list = list.concat(current)
      })
      console.log(list.some((item) => item.uid===uid))
      this.setState({
        list: list
      })
    })
  }
  
  handleClick() {
    //点击事件的处理函数
  }

  columns = [{
    title: '排名',
    dataIndex: 'rank',
    key: 'rank',
  },{
    title: 'uid',
    dataIndex: 'uid',
    key: 'uid',
  },{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },{
    title: '是否在线',
    key: 'is_alive',
    render: (text, record) => {
      return (<span>{record.is_alive?'在线':'不在线'}</span>)
    }
  },{
    title: '类型',
    key: 'guard_level',
    render: (text, record) => {
      const obj = {
        1: '总督',
        2: '提督',
        3: '舰长',
      }
      return(<span>{obj[record.guard_level]}</span>)
    }
  }]
  
  render() {
    const {list} = this.state
    return (
      <div className={styles.content}>
        <Table dataSource={list} columns={this.columns} />
        {/* <div className={styles.box}>
          <input />
          <input />
        </div> */}
            {/* <video controls className={styles.video}>
                <source src={video} type="video/mp4" />
                -您的浏览器不支持 video 标签-
            </video> */}
      </div>
    )
  }
}