import React from 'react';
import 'core-js/fn/object/assign';
import WrapListComponent from './../components/WrapListComponent.jsx';
import PListComponent from './../components/PListComponent.jsx';
import classNames from 'classnames/bind';
import styles from 'css/components/app';
const cx = classNames.bind(styles);


/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class List extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state={"list_header_ad":"","card":{},"plistData":[],"wraplistData":[],"hotData":[],isMobile:false}

  }
  componentWillMount(){
    this.setState(
        {
          "list_header_ad":"//wa.gtimg.com/website/201611/unknown_D_20161101135718.jpg",
          "list_right_ad":"http://img1.gtimg.com/ninja/2/2016/11/ninja147925726284341.jpg",
          "card":{
            "url":"/detail/11",
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
              "url":"/detail/12",
              "time":"2016-11-16 04:23",
              "commentCount":6627
            },
            {
              title:"中泰日韩四国混血校花晒照爆红",
              images:[
                "http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC"
              ],
              "site":"南方网",
              "url":"/detail/23",
              "time":"2016-11-16 04:23",
              "commentCount":6627
            }
          ],
          "wraplistData":[
            {
              title:"中泰日韩四国混血校花晒照爆红",
              images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
              "site":"南方网",
              "url":"/detail/23",
              "time":"2016-11-16 04:23",
              "commentCount":6627
            },
            {
              title:"中泰日韩四国混血校花晒照爆红",
              images:"http://inews.gtimg.com/newsapp_ls/0/793654621_150120/0",
              "site":"南方网",
              "url":"/detail/55",
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
          ]
        })

  }
  componentDidMount(){
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    this.setState({"isMobile":(isiOS||isAndroid)});
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
    console.log(this.state.wraplistData.length)
  }

  goTop(){
    var time = setInterval(function () {
      document.body.scrollTop = document.body.scrollTop - 50;
      if (document.body.scrollTop === 0) {
        clearInterval(time);
      }
    }, 1);
  }
  render() {
   var parent=this;
    return (
        <div className={cx("main-body")}>
        <div className={cx("weatherItem")}>
          <div className={cx("weatherWrap")}>
            <span id="echoData">2016年11月15日</span>
            <span id="echoWeek">星期二</span>
            <span id="wCity">广州</span>
            <span id="weatherIco"><img src="http://mat1.gtimg.com/news/newsweather/wIco/cloudy.png"/> </span>
            <span id="wTp">28℃</span>
          </div>
        </div>
        <div className={cx("list-left")}>
             <div className={cx("list-header-ad")}>
               <img src={this.state.list_header_ad}/>
             </div>
          <div className={cx("card-div")}>
            <a href={this.state.card.url}  target={parent.state.isMobile?'_self':'_blank'}>
              <p ><img src={this.state.card.imgUrl}/></p>
              <p>{this.state.card.title}</p>
              <p>{this.state.card.desc}</p>
              </a>
          </div>
               <div className={cx("major")}>
                  {
                    this.state.plistData.map(function(item,index){
                      return (
                          <PListComponent data={item} key={'plist_'+index}/>
                      )
                    })
                  }
                  {
                    this.state.wraplistData.map(function(item,index){
                      return (
                          <WrapListComponent  data={item} key={'wraplist_'+index}/>
                      )
                    })
                  }
              </div>
                  <div className={cx("showMore")} onClick={()=>this.getWrapListDataMore()} > >>查看更多</div>
              </div>
            <div className={cx("list-right")}>
                <div className={cx("hot-list")}>
                  <div className={cx("hot-title")}>热门排行榜</div>
                  <ul>
                    {
                      this.state.hotData.map(function(item,index){
                        return(
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
          </div>
          <div className={cx("aScroll")} onClick={()=>this.goTop()}></div>

   </div>
  );
  }
  
};
