import styles from './index.less';
import React, { Component } from 'react';
import BodyBg from '../components/body_bg';


import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

export default class Rule extends Component {
  //欢迎页
  componentDidMount() {
     
  }

  render() {
      return (
        <div className={styles.bg}>
        <BodyBg>
              
        </BodyBg>
        </div>
      )
  }
}