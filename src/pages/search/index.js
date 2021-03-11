import styles from './index.less';
import React, { Component } from 'react';
import BodyBg from '../../components/body_bg';
import axios from 'axios';
import { Select, Input, message, Modal } from 'antd';



import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
import { Link } from 'umi';
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
        searchVal:'',   //搜索框
    }
}

 
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://192.168.43.231:3000/rep',
            data: {
                
            }
        }).then(res => {
              console.log(res.status==200)
              this.setState({
                dataList:res.data.data
              })
        });
    }

   
   change = (e) =>{
    var sss= e.target.value
       this.setState({
           searchVal:sss
       })
   }
  

  back(){
      history.goBack();
  }

  render() {
    const{dataList,searchVal}=this.state
    console.log("searchVal+++++"+searchVal)


    var array=dataList
    var items=[]
    var type = 0
    
    for(var i=0;i<array.length;i++){
        var item = array[i]
        var url = item.baibuurl
        
        if(searchVal==item.classify){
            items.push(
                <Link to={{pathname:'/home',search:'?_id='+item._id+'&type='+type}} className={styles.card}>
                    <div className={styles.img}>
                        <img src={item.img} style={{width:'100px',height:'100px'}}></img>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.classify}>品种：{item.classify}</div>
                        {/* <a href={url}>{item.baibuurl}</a> */}
                    </div>
                </Link>)
        }

        
    }
    var array=dataList
    var items2=[]
    var type = 0
    
    for(var i=0;i<array.length;i++){
        var item = array[i]
        var url = item.baibuurl
        
       

        items2.push(
            <Link to={{pathname:'/home',search:'?_id='+item._id+'&type='+type}} className={styles.card}>
                <div className={styles.img}>
                    <img src={item.img} style={{width:'100px',height:'100px'}}></img>
                </div>
                <div className={styles.info}>
                    <div className={styles.classify}>品种：{item.classify}</div>
                    {/* <a href={url}>{item.baibuurl}</a> */}
                </div>
            </Link>
        )
    }



      return (

         
        <div className={styles.bg}>
            <BodyBg>
                
                <div className={styles.title_bar}>
                    <div className={styles.back_btn} onClick={this.back}></div>
                    搜索宠物</div>
                <div className={styles.search}>
                    <Input className={styles.search_bar} placeholder={"请输入品种"} value={searchVal} onChange={this.change}></Input>
                    {/* <div className={styles.search_btn}>取消</div>
                    <div className={styles.search_btn}>搜索</div> */}
                </div>
                
            <div className={styles.list}>
                {searchVal?items:items2}
                {/* {items2} */}
                <div style={{height:'20px'}}></div>

            </div>
             
            </BodyBg>
        </div>
              
      )
  }
}