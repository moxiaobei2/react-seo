/**
 * Created by wxl on 2016/9/3.
 * 面包屑 component
 */
import 'core-js/fn/object/assign';
import React,{Component}from 'react';
import classNames from '../../node_modules/classnames/bind';
import ShareComponent from './ShareComponent.jsx';
import styles from 'css/components/wrapListComponent.css';
const cx = classNames.bind(styles);


export default class WrapListComponent extends Component{
    constructor(props,context){
        super(props,context);
        this.state={"isMobile":false};
    }
    componentDidMount(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        this.setState({"isMobile":(isiOS||isAndroid)});
    }
  render(){
   // return template.apply({"data":this.props.data,isMobile:isMobile()});
    var parent=this;
    return (
        <div className={cx("tpList")} style={{"zIndex": 47}}>
        <div className={cx("tpWrap")} >
        <a target={parent.state.isMobile?'_self':'_blank'}  className={cx("pic")}  href="{this.data.url}">
             <img className={cx("picto")}  src={this.props.data.images} />
        </a>
        <div className={cx("text")} >
            <em className={cx("f14 l24")} >
              <a target={parent.state.isMobile?'_self':'_blank'} className={cx("linkto")}  href="http://news.qq.com/a/20161116/002274.htm">{this.props.data.title}</a>
            </em>

            <div className={cx("st")} >
                <div className={cx("info")} >
                <span className={cx("from")} >{this.props.data.site}</span><span className={cx("pub_time")} >{parent.props.data.time}</span>
            </div>
           <ShareComponent data={this.props.data} />
       </div>

        </div>
        </div>
     </div>
    )
  }
}



