import React, { Component, PropTypes } from 'react';
import 'core-js/fn/object/assign';
import $ from 'jquery';
import {Link,IndexLink} from 'react-router';
import classNames from 'classnames/bind';
import styles from 'css/components/app';
const cx = classNames.bind(styles);

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
export default class App extends Component {
    constructor(props,context){
        super(props,context);
        this.state={navArr:[],activeIndex:0,isMobile:false,searchList:["减肥","健身"],showSearch:false,keyword:""}
    }
    componentWillMount(){
        var navArr=[
            {"url":"/","name":"首页"},
            {"url":"/list/国际","name":"国际"},
            {"url":"/list/社会","name":"社会"},
            {"url":"/list/评论","name":"评论"},
            {"url":"/list/历史","name":"历史"},
            {"url":"/list/新闻哥","name":"新闻哥"}
        ];
        this.setState({"navArr":navArr});
    }
    componentDidMount(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        this.setState({"isMobile":(isiOS||isAndroid)});
    }
    render() {
    var parent=this;
    return (

              <div className={cx('appContent')}>
                  <div className={cx(this.props.params.id? 'header header-detail':'header')}>
                      <header  className={cx(this.props.params.id?(this.state.isMobile?'header-center hide':'header-center header-center-detail') : 'header-center')}>
                          {
                                !this.props.params.id?(
                                    <div className={cx("header-logo")} >
                                        <div className={cx("nav-logo")}>
                                            <img src={require("./../images/logo.png")}/>
                                        </div>
                                        <div className={cx("search-box")}>
                                            <input type="search" placeholder="Search" id="searchInput" onFocus={()=>{
                                                parent.setState({"showSearch":true});
                                            }}
                                                   onChange={(e)=>{
                                                      var value=e.target.value;
                                                      //去查关键字数据库
                                                      parent.setState({"searchList":["你妹","who care"]});
                                                   }}
                                            />
                                            <button onClick={()=>{
                                                 location.href="/search/减肥";
                                            }}>搜索</button>
                                            {
                                                parent.state.showSearch?(
                                                    <ul className={cx("search-list")}>
                                                        {
                                                            parent.state.searchList.map(function(item,index){
                                                                return (<li key={"search-list-"+index} onClick={()=>{
                                                                     $("#searchInput").val(item);
                                                                    parent.setState({"keyword":item,"showSearch":false});
                                                                }}>{item}</li>)
                                                            })
                                                        }
                                                    </ul>
                                                ):null
                                            }

                                        </div>
                                    </div>
                                ):null
                          }
                          {
                              this.state.isMobile?(<div className={cx("search-box")}>
                                  <input type="search" placeholder="Search" id="searchInput2" onFocus={()=>{
                                                parent.setState({"showSearch":true});
                                            }}
                                         onChange={(e)=>{
                                                      var value=e.target.value;
                                                      //去查关键字数据库
                                                      parent.setState({"searchList":["你妹","who care"]});
                                                   }}
                                  />
                                  <button onClick={()=>{
                                                 location.href="/search/减肥";
                                            }}>搜索</button>
                                  {
                                      parent.state.showSearch?(
                                          <ul className={cx("search-list")}>
                                              {
                                                  parent.state.searchList.map(function(item,index){
                                                      return (<li  key={"search-list-"+index}  onClick={()=>{
                                                                     $("#searchInput2").val(item);
                                                                     $("#searchInput").val(item);
                                                                    parent.setState({"keyword":item,"showSearch":false});
                                                                }}>{item}</li>)
                                                  })
                                              }
                                          </ul>
                                      ):null
                                  }

                              </div>):null
                          }
                          <ul className={cx("nav")} id="nav">
                              {
                                  this.state.navArr.map(function(item,index){
                                      if(index==0){
                                          return(
                                          <li key={'item'+index}>
                                               <IndexLink  to={{pathname:item.url}}  activeClassName={cx("active")}>{item.name}</IndexLink>
                                          </li>
                                          );
                                      }else{
                                          return (
                                          <li key={'item'+index}>
                                              <Link  to={{pathname:item.url}}  activeClassName={cx("active")}>{item.name}</Link>
                                         </li>
                                          );
                                      }
                                  })
                              }

                          </ul>
                          </header>
                 </div>
                {this.props.children}
                  <footer >
                      <p>xx系统 版权所有
                          <strong>Copyright © 2016~2020 </strong>本站所刊登的信息、数据和各种专栏材料，未经授权禁止下载使用
                      </p>
                      <p>
                          技术支持：广州xx公司
                      </p>
                  </footer>
              </div>

    );
  }
};

App.propTypes = {
  children: PropTypes.object
};
