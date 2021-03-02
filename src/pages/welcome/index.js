import styles from './index.less';
import React, { Component } from 'react';
import axios from 'axios';


import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
import { Link, Route } from 'umi';
const history = creatHistory();//返回上一页这段代码

export default class Rule extends Component {
    //欢迎页
    


    render() {
        return (

            <div className={styles.logo}>
                <div className={styles.logo_text}>
                    <div style={{ fontSize: '24px', textAlign: 'center' }}>两栖爬宠</div>
                    <div>成长计划</div>
                </div>
                <div style={{ width: '70%', height: '2px', backgroundColor: 'rgb(82, 121, 84)', position: 'absolute', top: '23%' }}></div>


                <div className={styles.btn}>
                    <Link to='/mylist' className={styles.btn_item} onClick={this.goto}>我的</Link>
                    <Link to='/search' className={styles.btn_item} onClick={this.goto}>搜索</Link>
                </div>
                
            </div>
        )
    }
}