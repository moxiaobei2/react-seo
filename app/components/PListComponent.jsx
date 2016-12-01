/**
 * Created by wxl on 2016/9/3.
 * 面包屑 component
 */
import React,{Component}from 'react';
import 'core-js/fn/object/assign';
import classNames from '../../node_modules/classnames/bind';
import styles from 'css/components/pListComponent.css';
import ShareComponent from './ShareComponent.jsx';
import {Link} from 'react-router';
const cx = classNames.bind(styles);


export default class PListComponent extends Component{
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
    //return template.apply({"data":this.props.data,isMobile:isMobile()});
        var parent=this;
    return (
        <div className={cx("plist")}>
          <div className={cx("content")}>
            <em>
              <Link className={cx("linkto")} src={this.props.data.url}>{this.props.data.title}</Link>
            </em>
            <ul>
              {
               this.props.data.images.map(function(item,index){
                return (
                    <li className={cx("pic")} key={"list_images_"+index}>
                      <a href={parent.props.data.url} target={parent.state.isMobile?'_self':'_blank'}>
                        <img className={cx("picto")} src={item} key={'plist_img_'+index} />
                      </a>
                    </li>
                );
              })
              }

            </ul>
          </div>
          <div className={cx("st")}>
            <div className={cx("info")}>
              <span className={cx("from")}>{this.props.data.site}</span><span className={cx("pub_time")}>{this.props.data.time}</span>
            </div>
            <ShareComponent data={this.props.data} />
          </div>

        </div>
        )

  }
}



