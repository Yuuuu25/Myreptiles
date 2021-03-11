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
        dataList:[],
        classify:'',     //品种
        name:'',     //名字
        img:'',       //图片
    }
}

 
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://192.168.43.231:3000/myrep',
            data: {
                
            }
        }).then(res => {
              console.log(res.status==200)
              this.setState({
                dataList:res.data.data
              })
        });
    }


     
  

  back(){
      history.goBack();
  }

  render() {
    const{dataList}=this.state
    console.log(dataList)
    var array=dataList
    var items=[]
    var type = 1
    for(var i=0;i<array.length;i++){
        var item = array[i]
        items.push(
            <Link to = {{pathname:'/home',search:'?_id='+item._id+'&type='+type}} className={styles.card}>
                <div className={styles.img}>
                    <img src={item.img} style={{width:'100px',height:'100px'}}></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.classify}>品种：{item.classify}</div>
                    <div className={styles.name}>名字：{item.name}</div>
                </div>
            </Link>
        )
    }


      return (

         
        <div className={styles.bg}>
            <BodyBg>
                
                <div className={styles.title_bar}>
                    <div className={styles.back_btn} onClick={this.back}></div>
                    我的宠物</div>
            <div className={styles.list}>
                {items}
                <div style={{height:'20px'}}></div>

            </div>
             
            </BodyBg>
        </div>
              
      )
  }
}