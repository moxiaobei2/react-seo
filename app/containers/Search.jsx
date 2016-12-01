/**
 * Created by wxl on 2016/11/15.
 */
import React,{Component} from 'react';
import $ from 'jquery';
import classNames from 'classnames/bind';
import styles from 'css/components/app';
const cx = classNames.bind(styles);
import WrapListComponent from './../components/WrapListComponent.jsx';

export default class Search extends Component{
   constructor(props,context){
     super(props,context);
     this.state={"list_header_ad":"","card":{},"wraplistData":[],"hotData":[], backArr:[]}

   }
   goBack(){
     history.go(-1);
   }

   componentWillMount(){

     this.setState(
       {
         "list_header_ad":"//wa.gtimg.com/website/201611/unknown_D_20161101135718.jpg",
         "list_right_ad":"http://img1.gtimg.com/ninja/2/2016/11/ninja147925726284341.jpg",
         "wraplistData":[
           {
             title:"中泰日韩四国混血校花晒照爆红",
             images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
             "site":"南方网",
             "url":"",
             "time":"2016-11-16 04:23",
             "commentCount":6627
           },
           {
             title:"中泰日韩四国混血校花晒照爆红",
             images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
             "site":"南方网",
             "url":"",
             "time":"2016-11-16 04:23",
             "commentCount":6627
           },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             }, {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             }, {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             },
             {
                 title:"中泰日韩四国混血校花晒照爆红",
                 images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
                 "site":"南方网",
                 "url":"",
                 "time":"2016-11-16 04:23",
                 "commentCount":6627
             }
         ],
         "hotData":[
           {
             title:"国民党一问蔡英文：为什么让黑道担任党部主委",
             id:117
           },
           {
             title:"国民党二问蔡英文：为什么让黑道担任党部主委",
             id:117
           },
           {
             title:"国民党三问蔡英文：为什么让黑道担任党部主委",
             id:117
           },
           {
             title:"国民党三问蔡英文：为什么让黑道担任党部主委",
             id:117
           },
           {
             title:"国民党三问蔡英文：为什么让黑道担任党部主委",
             id:117
           },
           {
             title:"国民党三问蔡英文：为什么让黑道担任党部主委",
             id:117
           },
         ],

       })
   }
    componentDidMount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));

    }

    handleScroll(e) {
        //加载更多scroll处理
        var a = document.documentElement.clientHeight;
        var c = document.documentElement.scrollHeight;
        var b = document.documentElement.scrollTop + document.body.scrollTop;
        if (navigator.onLine){
            if ( b >= (c - a)) {
                //加载更多数据，然后实现
                console.log("滚动啦~~~");
                this.getWrapListDataMore();
            }
        }else{
            console.log('网络异常，请检查是否联网');
        }
    }
   getWrapListDataMore(){
     var newObj=[
       {
         title:"大佬云集 一张图带你读懂第三届世界互联网大会",
         images:"http://inews.gtimg.com/newsapp_ls/0/793672286_150120/0",
         "site":"南方网",
         "url":"",
         "time":"2016-11-16 04:23",
         "commentCount":23
       },
       {
         title:"大佬云集 一张图带你读懂第三届世界互联网大会",
         images:"http://inews.gtimg.com/newsapp_ls/0/793672286_150120/0",
         "site":"南方网",
         "url":"",
         "time":"2016-11-16 04:23",
         "commentCount":43
       }
     ]

     var newResult=this.state.wraplistData.concat(newObj);
     this.setState({"wraplistData":newResult});
    // console.log(this.state.wraplistData.length)
   }

   goTop(){
     var time = setInterval(function () {
       document.body.scrollTop = document.body.scrollTop - 50;
       if (document.body.scrollTop === 0) {
         clearInterval(time);
       }
     }, 1);
   }
   render(){
       return (
           <div className={cx("main-body")}>
               <div  className={cx("detail-bar")}>
                   <div onClick={()=>this.goBack()}>
                       <svg viewBox="0 0 24 24" className={cx("back-btn")}>
                           <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                       </svg>
                   </div>
               </div>

               <div  className={cx("list-left")}>
                   <div  className={cx("major")} style={{marginTop:"10px"}}>
                       <div  className={cx("hot-title")}>搜索结果：</div>
                       {
                           this.state.wraplistData.map(function(item,index){
                               return (
                                   <WrapListComponent  data={item} key={'wraplist_'+index}/>
                               )
                           })
                       }

                   </div>

               </div>
               <div className={cx("list-right")}>
                   <div className={cx("hot-list")}>
                       <div className={cx("hot-title")}>热门排行榜</div>
                       <ul>
                           {
                               this.state.hotData.map(function(item,index){
                                   return (
                                       <li key={'hot_list'+index}>
                                           <p className={cx(index<3?'hot-list-title hot-list-title-active':'hot-list-title')} name={index+1} >{item.title}</p>
                                       </li>
                                   )
                               })
                           }

                       </ul>
                   </div>
                   <div className={cx("list-right-ad")}>
                       <img src={this.state.list_right_ad} width="300"/>
                   </div>

                   <div className={cx("list-right-ad")}>
                       <img src="http://usr.im/300x300?&bg=2CC8DC"/>
                   </div>

                   <div className={cx("list-right-ad")}>
                       <img src="http://usr.im/300x300?&bg=FF0099"/>
                   </div>
               </div>

               <div className={cx("aScroll")} onClick={()=>this.goTop()}></div>
           </div>

       )
   }
}

