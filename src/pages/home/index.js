import styles from './index.less';
import React, { Component } from 'react';
import BodyBg from '../../components/body_bg';
import queryString from 'query-string';
import axios from 'axios';
import { Link } from 'umi';
import { Select, Input, message, Modal } from 'antd';


import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

export default class Rule extends Component {
  //物种信息页
  constructor(props) {
    super(props);
    this.state = {
       id:'',
       name:'',
       dataList:[],
       type:'',
       addType:0,
       rename:'',
       data:{}
        
    }
}
  componentDidMount() {
    var search = queryString.parse(this.props.location.search);
    // console.log(search)
    // console.log(search._id)
    // console.log(search.type)
    this.setState({
      id:search._id,
      type:search.type
      
    })
    if(search.type==0){
          console.log("列表")
          axios({
            method: 'get',
            url: 'http://192.168.43.231:3000/rep',
            data: {
                
            }
        }).then(res => {
              // console.log(res.status==200)
              this.setState({
                dataList:res.data.data
              })
        });
    }else{
          console.log('我的')
          axios({
            method: 'get',
            url: 'http://192.168.43.231:3000/myrep',
            data: {
                
            }
        }).then(res => {
              // console.log(res.status==200)
              this.setState({
                dataList:res.data.data
              })
        });
    }

   
   
  }

  back(){
    history.goBack();
  }

  add=()=>{
    this.setState({
      addType:1
    })
  }
  sure=(e)=>{
    var sss= e.target.value
       this.setState({
         rename:sss
       })
  }

  put=()=>{
    const{dataList,id,rename}=this.state
    console.log(rename)
   
    var a={}
    var array = dataList;
    for(var i = 0;i< array.length;i++){
      var item = array[i]
      if(id == item._id){
       a=item  
      }
    }
    console.log(a)

    //设置时间格式
    var curDate = new Date()
    var y = curDate.getFullYear();
    var m = curDate.getMonth()+1;
    var d = curDate.getDate();
    
    var myDate = y+'-'+m+'-'+d
    console.log(m)
    console.log(myDate)
    if(!rename){
      alert("名字不能为空")
    }else{
   
        axios({
            method: 'post',
            url: 'http://192.168.43.231:3000/myrep',
            data: {
              classify:a.classify,
              name:rename,
              img:a.img,
              starttime:myDate,
              baibuurl:a.baibuurl,
              maxtem:a.maxtem,
              mintem:a.mintem,
              maxhum:a.minhum,
              minhum:a.minhum,
              space:a.space,
              xl:a.xl,
              food:a.food,
            }
          }).then(res =>{
            if(res.status==200){
              alert('添加成功')
              history.goBack()
            }
              
          });
        }
  }

  render() {
    const{id,dataList,type,addType,rename}=this.state
    console.log(rename)
    
    var img = '';
    var name = '';
    var classify = '';
    var starttime = '';
    var baiduurl = '';
   
    
    var array = dataList;
    for(var i = 0;i< array.length;i++){
      var item = array[i]
      if(id == item._id){
        if(type==0){
          console.log('列表')
          img = item.img;
          classify = item.classify;
          baiduurl = item.baibuurl
        }else{
          console.log('我的')
          img = item.img;
          name = item.name;
          classify = item.classify;
          starttime = item.starttime;
          baiduurl = item.baibuurl
          
        }
      }
      
      
    }
    
    
      return (
         
        <div className={styles.bg}>
        <BodyBg>
            <div className={styles.head}>
              <img className={styles.img} src={img}></img>
              <div className={styles.text}>
                <div className = {styles.classify}>{classify}</div>
                {type==0?
                  <div></div>
                :
                <div>
                  <div className = {styles.name}>名字：{name}</div>
                  <div className = {styles.time}>开始时间：{starttime}</div>
                </div>
                }
                {addType==0?
                  <div></div>
                  :
                  <div>
                    <Input className={styles.input} placeholder={"请为宠物起名"} value={rename} onChange={this.sure}></Input>
                    <div className={styles.sure_btn}  onClick={this.put}>确定</div>
                  </div>
                }
                
              </div>
              <div className={styles.head_btn}>
                <div className={styles.back} onClick={this.back}>退出</div>
                {type==0?
                  <div className={styles.add} onClick={this.add}>添加</div>
                :
                <div>
                </div>
                }
                
              </div>

            </div>
            <div className={styles.body}>
                <a href={baiduurl} className={styles.body_btn}>物种介绍</a>
                <Link to={{pathname:'/plan',search:'?_id='+id+'&type='+type}} className={styles.body_btn}>饲养方案</Link>
                {type==0?
                  <div></div>
                :
                <Link to={{pathname:'/automatic',search:'?_id='+id+'&type='+type}} className={styles.body_btn}>智能生存环境</Link>
                }
                
            </div>
            
        </BodyBg>
    </div>
      )
  }
}