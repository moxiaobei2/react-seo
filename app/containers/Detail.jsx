/**
 * Created by wxl on 2016/11/15.
 */
import React,{Component} from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/app';
const cx = classNames.bind(styles);
import $ from 'jquery';
import WrapListComponent from './../components/WrapListComponent.jsx';
import PListComponent from './../components/PListComponent.jsx';

export default class Detail extends Component{
   constructor(props,context){
     super(props,context);
     this.state={"list_header_ad":"","card":{},"plistData":[],"wraplistData":[],"hotData":[], backArr:[]}

   }
   goBack(){
     history.go(-1);
   }
    componentDidMount(){
        $(".header").css({"height":"3rem"})
    }
   componentWillMount(){
     this.setState(
       {
         "list_header_ad":"//wa.gtimg.com/website/201611/unknown_D_20161101135718.jpg",
         "list_right_ad":"http://img1.gtimg.com/ninja/2/2016/11/ninja147925726284341.jpg",
         "card":{
           "url":"",
           "imgUrl":"http://www.material-ui.com/images/nature-600-337.jpg",
           "title":"title",
           "subtitle":"subtitle",
           "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio."
         },
         "plistData":[
           {
             title:"中泰日韩四国混血校花晒照爆红",
             images:[
               "http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC"
             ],
             "site":"南方网",
             "url":"",
             "time":"2016-11-16 04:23",
             "commentCount":6627
           },
           {
             title:"中泰日韩四国混血校花晒照爆红",
             images:[
               "http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC"
             ],
             "site":"南方网",
             "url":"",
             "time":"2016-11-16 04:23",
             "commentCount":6627
           }
         ],
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
                   <div className={cx("list-header-ad")}>
                       <img src={this.state.list_header_ad}/>
                   </div>
                   <article  className={cx("detail-article")} >
                       <section  className={cx("detail-title")}>已经帮助50+人瘦身成功的方法</section>
                       <section   className={cx("detail-subtitle")}>
                           没有动人的情节，只有朴实的经历。我的减肥经历不一定能打动你，但一定对你有帮助！(重要提醒：如果你确实为减肥困扰，请务必花5分钟时间认真看完我的经历。)
                       </section>
                       <p  className={cx("detail-content")}>

                           <img src="http://img1.gtimg.com/news/pics/hv1/195/149/2155/140167065.jpg"/>
                           很多人说看到我现在的模样，很难想象，之前的我竟是一个被肉包裹的胖子！膀大腰圆、赘肉横飞形容的就是我！而且我和我妈妈一致认为，长得胖没关系，只要自己开心就好，我就是这样大吃大喝度过了我“丰满”的二十四年，体重超140斤。
                           直到我去年毕业找工作了，因为要在外面找房子住，爸妈又不放心，于是要我自己找一个室友一起合租。后来同事介绍了一个妹纸过来看房，不是《生活大爆炸》里面雷纳德和谢耳朵那样虽然相互嫌弃、但是一拍即合的戏码，这个妹纸看了房子表示很满意，但是却没有答应一起合租，后来从朋友处得知她是觉得我太胖了…太胖了…太胖了！
                           原来长得胖，招个室友都很难，更别提找对象了！与别人合影时，我永远是胖乎乎油腻腻的那个，看起来比别人要老5岁！于是，我开始反省：是时候减肥了，因为肥胖并没有让我有多快乐，反而让我失去了很多机会。
                           于是开启疯狂减肥模式！为了能瘦下来，我绝食，过量运动，也尝试过一些市面上的减肥药……坚持了两个月，我的体重减了5斤。但是身边的朋友都说我看起来面色暗黄、无精打采；而且，一旦我放弃这些减肥方法，立即恢复以前的体重值，甚至飙升到145斤！
                           正当我为减肥一筹莫展的时候，偶然一次机会，我开始研究科学减肥方法，有时间就自己浏览网页，根据自身的条件，科学搭配饮食、督促合理健身、逐步改善体质，已经帮助1000+的减肥者瘦身成功。
                           1.三餐定时定量。一日三餐都按照 “健康菜谱”来吃：按时按量、定量吃肉、大量豆制品。。有人说“吃肉就长肉”，其实减肥也要适量吃点肉，这样才能营养均衡。
                           2.减少淀粉类的摄取。过多的淀粉会造成肥胖，但是人体需要相当比例的碳水化合物才能正常运作，如果长期不吃饭、面等淀粉类食物，长期下来会出现营养不良。
                           3.坚持运动。我之前都有运动，但是往往只是坚持一小段时间就放弃了，所以常常收效甚微。针对我总是坚持不下去这件事，我寻找一个一起跑步的小伙伴，两个人一起相互监督相互鼓励，就可以坚持下去，后来我拉了我发小一起跑步，直到我现在，我还会习惯每天跑上45分钟。
                           之后，我的减肥之路就像开了挂，身体不知不觉变得轻盈……知道现在我的体重一直维持在96斤左右，再没有反弹过！很多久别重逢的朋友都以为我整容了!
                           鉴于自己减肥的成功经验，我把它们推荐给了身边饱受肥胖困扰的朋友。无一例外，她们都在可欣老师的帮助下，成功减肥，华丽逆袭。↓↓↓↓
                           <img src="http://img1.gtimg.com/news/pics/hv1/199/150/2155/140167324.jpg" />
                           玲子：曾经251斤小胖子到现在105斤的元气少女，坚持了4个月，还在努力中。▼
                           璐璐：4个月减下50斤，人也开始变得洋气，不知道让她男票偷着乐了多少次！▼
                           小诺：非典型高知辣妈，一直受产后肥胖困扰，减肥前与减肥后判若两人。▼
                           马丽丽:我的大学同学兼室友死党，瘦身成功后像是换了一个人有没有？▼
                       </p>
                   </article>

                   <div  className={cx("major")} style={{marginTop:"10px"}}>
                       <div  className={cx("hot-title")}>推荐</div>
                       {
                           this.state.plistData.map(function(item,index){
                               return (
                                   <PListComponent  data={item} key={'plist_'+index} />
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
               <div className={cx("detail-bottom-ad")} style={{width:"1000px",height:"100p",display:"table"}}>
                   <img src="http://usr.im/1200x100?&bg=2CC8DC"/>
               </div>
               <div className={cx("aScroll")} onClick={()=>this.goTop()}></div>
           </div>

       )
   }
}

