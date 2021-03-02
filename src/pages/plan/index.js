import styles from './index.less';
import React, { Component } from 'react';
import BodyBg from '../../components/body_bg';
import axios from 'axios';
import { Link } from 'umi';
import queryString from 'query-string';




import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

export default class Rule extends Component {
  //我的宠物页
  constructor(props) {
    super(props);
    this.state = {
        dataList:[],
        id:'',
        type:''
    }
}

 
componentDidMount() {
    var search = queryString.parse(this.props.location.search);
    this.setState({
      id:search._id,
      type:search.type
      
    })
    if(search.type==0){
          console.log("列表")
          axios({
            method: 'get',
            url: 'http://192.168.2.6:3000/rep',
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
            url: 'http://192.168.2.6:3000/myrep',
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
       

  render() {
    const{id,dataList,type}=this.state
    var img = '';
    var name = '';
    var classify = '';
    var starttime = '';
    var baiduurl = '';
    var maxtem = 0;
    var mintem = 0;
    var maxhum = 0;
    var minhum = 0;
    var space= '';
    var xl= '';
    var food= '';
   
    
    var array = dataList;
    for(var i = 0;i< array.length;i++){
      var item = array[i]
      
      if(id == item._id){
        if(type==0){
          console.log('列表')
          img = item.img;
          classify = item.classify;
          baiduurl = item.baibuurl;
          maxtem=item.maxtem;
          maxhum=item.maxhum;
          minhum= item.minhum;
          mintem= item.mintem;
          space= item.space;
          xl = item.xl;
          food=item.food;

        }else{
          console.log('我的')
          img = item.img;
          name = item.name;
          classify = item.classify;
          starttime = item.starttime;
          baiduurl = item.baibuurl;
          maxtem=item.maxtem;
          maxhum=item.maxhum;
          minhum= item.minhum;
          mintem= item.mintem;
          space= item.space;
          xl = item.xl;
          food=item.food;
          
        }
      }
      
    }

    console.log(img)
      return (

         
        <div className={styles.bg}>
            <BodyBg>
            <div className={styles.title_bar}>
                    <div className={styles.back_btn} onClick={this.back}></div>
                    {classify}&nbsp;饲养方案</div>
                
            <div className={styles.body}>
                <div className={styles.item1}>
                    <img className={styles.img} src={img}></img>
                    <div className={styles.text}>
                        <div>适宜温度：<br/>&nbsp;&nbsp;&nbsp;&nbsp;{mintem}℃~{maxtem}℃ </div>
                        <div>适宜湿度：<br/>&nbsp;&nbsp;&nbsp;&nbsp;{minhum}%~{maxhum}%</div>
                        <div>水路比：&nbsp;{xl}</div>

                    </div>
                </div>
                <div className={styles.item2}>
                    <div className={styles.food}>生存环境：<br/>{space}</div>
                    <div className={styles.food}>喂食推荐：<br/>{food}</div>
                </div>
                
            </div>
             
            </BodyBg>
        </div>
              
      )
  }
}