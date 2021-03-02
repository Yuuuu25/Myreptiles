import styles from './index.less';
import React, { Component } from 'react';
import BodyBg from '../../components/body_bg';
import axios from 'axios';
import { Link } from 'umi';



import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

export default class Rule extends Component {
  //我的宠物页
  constructor(props) {
    super(props);
    this.state = {
        
    }
}

 
    componentDidMount() {
        
    }

    back(){
        history.goBack();
    }
     
  

 

  render() {

      return (

         
        <div className={styles.bg}>
            <BodyBg>
            <div className={styles.title_bar}>
                    <div className={styles.back_btn} onClick={this.back}></div>
                    智能生存环境</div>
                
            
                
            <div>
                智能生存环境
            </div>
             
            </BodyBg>
        </div>
              
      )
  }
}