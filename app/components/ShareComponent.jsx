/**
 * Created by wxl on 2016/9/3.
 * 面包屑 component
 */
import classNames from '../../node_modules/classnames/bind';
import 'core-js/fn/object/assign';
import styles from 'css/components/shareComponent.css';
const cx = classNames.bind(styles);
import React,{Component}from 'react';
export default class ShareComponent extends Component{
  render(){
  //  return template.apply({"url":"http://localhost:8000"+this.props.data.url,"commentCount":this.props.data.commentCount,"title":this.props.data.title,"des":this.props.data.title});
    return (
        <div className={cx("btns")}>
          <a className={cx("discuzBtn")} title="评论数" href={this.props.data.url}>{this.props.data.commentCount}</a>
          <div className={cx("shareBtn")}  aria-label="分享" >

            <ul className={cx("shares")}>
              <li className={cx("jiantou")}>
              </li>
              <li className={cx("shareButton")} id="share2qzone">
                <a  target="_blank" href={"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+this.props.data.url+"&title="+this.props.data.title+"&desc="+this.props.data.desc+"&summary="+this.props.data.desc+"&site=站群系统"} className={cx("s_qzone")} >QQ空间</a>
              </li>
              <li className={cx("shareButton")} id="share2qq">
                <a  target="_blank" href={"http://connect.qq.com/widget/shareqq/index.html?url="+this.props.data.url+"&title="+this.props.data.title+"&source=站群系统&desc="+this.props.data.desc} className={cx("s_qq")}>QQ好友</a>
              </li>
              <li id="share2sina" className={cx("shareButton")}>
                <a target="_blank"  href={"http://service.weibo.com/share/share.php?url="+this.props.data.url+"&title="+this.props.data.title+"&pic="+this.props.data.image+""} className={cx("s_sina")} >新浪微博</a>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}



