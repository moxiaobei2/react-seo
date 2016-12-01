import React from 'react';
import $ from 'jquery';
import  CubeSpinnerComponent from './../components/CubeSpinnerComponent.jsx';
import PListComponent from './../components/PListComponent.jsx';
import WrapListComponent from './../components/WrapListComponent.jsx';
var mySwiper={};
var swiperStyle=require('swiper/dist/css/swiper.min.css');
import classNames from 'classnames/bind';
import styles2 from 'css/components/app';
import styles from 'css/components/home';
var newStyle=Object.assign(styles,styles2,swiperStyle);

const cx = classNames.bind(newStyle);

function fixDiv(div_id, offsetTop) {
  var Obj = $('#' + div_id);
//判断元素是否存在 何问起
  if (Obj.length != 1) { return false; }

  var offsetTop = arguments[1] ? arguments[1] : 0;
  var ObjTop = Obj.offset().top;


  $(window).scroll(function () {
    if ($(window).scrollTop() <= ObjTop) {
      Obj.css({
        'position': 'relative',
        "top": 0
      });
    } else {
      Obj.css({
        'position': 'fixed',
        'top': 0 + offsetTop + 'px',
        'z-index': 10
      });
    }
  });
}
/*
 * Note: This is kept as a container-level component, 
 *  i.e. We should keep this as the container that does the data-fetching 
 *  and dispatching of actions if you decide to have any sub-components.
 */
export default class Home  extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      name:"ling",
      "list_right_ad":"http://img1.gtimg.com/ninja/2/2016/11/ninja147925726284341.jpg",
      images: [
        'http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC',
        'http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC',
        'http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC',
        'http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC',
        'http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC',
        'http://usr.im/275x250?&bg=2CC8DC","http://usr.im/275x250?&bg=2CC8DC',
      ],
      cubeData:[
        {"url":"http://www.baidu.com",images:"http://usr.im/300x300?&bg=2CC8DC&text=ad1"},
        {"url":"http://www.baidu.com",images:"http://usr.im/300x300?&bg=2CC8DC&text=ad2"},
        {"url":"http://www.baidu.com",images:"http://usr.im/300x300?&bg=2CC8DC&text=ad3"},
        {"url":"http://www.baidu.com",images:"http://usr.im/300x300?&bg=2CC8DC&text=ad4"},
        {"url":"http://www.baidu.com",images:"http://usr.im/300x300?&bg=2CC8DC&text=ad5"},
        {"url":"http://www.baidu.com",images:"http://usr.im/300x300?&bg=2CC8DC&text=ad6"}
      ],
      swiperData:[
        {"url":"http://www.baidu.com",images:"http://usr.im/870x300?&bg=FF8000&text=ad1"},
        {"url":"http://www.baidu.com",images:"http://usr.im/870x300?&bg=2CC8DC&text=ad2"},
        {"url":"http://www.baidu.com",images:"http://usr.im/870x300?&bg=FF8000&text=ad3"},
        {"url":"http://www.baidu.com",images:"http://usr.im/870x300?&bg=2CC8DC&text=ad4"},
        {"url":"http://www.baidu.com",images:"http://usr.im/870x300?&bg=FF8000&text=ad5"},
        {"url":"http://www.baidu.com",images:"http://usr.im/870x300?&bg=2CC8DC&text=ad6"}
      ],
      navList: [
        {
          navName:"国际",
          "plistData": [
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: [
                "http://usr.im/275x250?&bg=2CC8DC", "http://usr.im/275x250?&bg=2CC8DC", "http://usr.im/275x250?&bg=2CC8DC"
              ],
              "site": "南方网",
              "url": "/detail/12",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            }
          ],
          "wraplistData": [
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: "http://usr.im/150x120?&bg=2CC8DC",
              "site": "南方网",
              "url": "/detail/23",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            },
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: "http://usr.im/150x120?&bg=2CC8DC",
              "site": "南方网",
              "url": "/detail/55",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            }
          ]
        },
        {
          navName:"社会",
          "plistData": [
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: [
                "http://usr.im/275x250?&bg=2CC8DC", "http://usr.im/275x250?&bg=2CC8DC", "http://usr.im/275x250?&bg=2CC8DC"
              ],
              "site": "南方网",
              "url": "/detail/12",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            }
          ],
          "wraplistData": [
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: "http://usr.im/150x120?&bg=2CC8DC",
              "site": "南方网",
              "url": "/detail/23",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            },
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: "http://usr.im/150x120?&bg=2CC8DC",
              "site": "南方网",
              "url": "/detail/55",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            }
          ]
        },
        {
          navName:"评论",
          "plistData": [
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: [
                "http://usr.im/275x250?&bg=2CC8DC", "http://usr.im/275x250?&bg=2CC8DC", "http://usr.im/275x250?&bg=2CC8DC"
              ],
              "site": "南方网",
              "url": "/detail/12",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            }
          ],
          "wraplistData": [
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: "http://usr.im/150x120?&bg=2CC8DC",
              "site": "南方网",
              "url": "/detail/23",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            },
            {
              title: "中泰日韩四国混血校花晒照爆红",
              images: "http://usr.im/150x120?&bg=2CC8DC",
              "site": "南方网",
              "url": "/detail/55",
              "time": "2016-11-16 04:23",
              "commentCount": 6627
            }
          ]
        }
      ],
      "newData":[
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
    }

  }
  componentDidMount(){
    this.state.navList.map(function(item,index){
      fixDiv('home-nav-'+index, 5);//顶端浮动并于顶端保持5px的间距
    });
    var swiper =require('swiper');
    mySwiper=new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      autoplay:2000
    });

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
   // return <div >fff</div>
    return (
        <div className={cx("main-body")}>
          <div className={cx("list-left")}>
            <div className={cx("swiper-container")}>
              <div className={cx("swiper-wrapper")} >
                {this.state.swiperData.map(function(item,index){
                  return (
                      <div className={cx("swiper-slide swiper-ad")}>
                        <a href={item.url}>
                          <img src={item.images}/>
                        </a>
                      </div>
                  )
                })}
              </div>
                 <div className={cx("swiper-pagination")}></div>
            </div>
            <div className={cx("nav-list")}>
              {
                  this.state.navList.map(function(item,index){
                    return (
                        <div className={cx("major")} key={'navList_'+index}>
                          <div className={cx("hot-title home-nav")} id={'home-nav-'+index}>{item.navName}</div>
                          {
                              item.plistData.map(function(itemp,pindex){
                                return (
                                    <PListComponent data={itemp} key={'plist_'+pindex}/>
                                )
                              })
                          }
                          {
                              item.wraplistData.map(function(itemw,windex){
                                return (
                                    <WrapListComponent   data={itemw} key={'wraplist_'+windex}/>
                                )
                              })
                          }


                        </div>
                    )
                  })
              }


            </div>
          </div>
          <div className={cx("list-right")}>
            <div className={cx("cubespinner-div")}>
              <CubeSpinnerComponent data={this.state.cubeData}/>
            </div>
            <div className={cx("hot-list")}>
              <div className={cx("hot-title")}>今日最新</div>
              <ul>
                {this.state.newData.map(function(item,index){
                  return (
                      <li  key={'hot_list'+index}>
                        <p className={cx(index<3?'hot-list-title hot-list-title-active':'hot-list-title')} name={index+1} >{item.title}</p>
                      </li>
                  )
                })}

              </ul>
            </div>
            <div className={cx("list-right-ad")}>
              <img src={this.state.list_right_ad} width="300"/>
            </div>

            <div className={cx("small-ad")} >
              <img src="http://usr.im/300x100?&bg=2CC8DC&text=ad"/>
            </div>

            <div className={cx("small-ad")} >
              <img src="http://usr.im/300x100?&bg=06FF00&text=ad"/>
            </div>


            <div className={cx("small-ad")} >
              <img src="http://usr.im/300x500?&bg=FFAEC9&text=ad"/>
            </div>


          </div>
          <div className={cx("detail-bottom-ad")} style={{"display":"table"}}>
            <img src="http://usr.im/1200x100?&bg=2CC8DC"/>
          </div>
          <div className={cx("aScroll")} onClick={()=>this.goTop()}>
          </div>
        </div>
    );
  }
  
};
