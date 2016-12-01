/**
 * Created by wxl on 2016/11/17.
 */
import React,{Component}from 'react';
import classNames from '../../node_modules/classnames/bind';
import styles from 'css/components/cubeSpinner.css';
const cx = classNames.bind(styles);
class CubeSpinnerComponent extends Component{
  render(){
    return (
        <div className={cx("stage")} style={{width:"300px", height:"300px",margin:"10px auto"}}>
          <div className={cx("cubespinner")}>
            {
                this.props.data.map(function(item,index){
                  return (
                      <div className={cx("face"+(index+1)+"  face-ad")}   key={"face_"+index}>
                        <a href={item.url} target="_blank">
                          <img src={item.images}/>
                        </a>
                      </div>
                  )
                })
            }
          </div>
        </div>

    )
  }
}

export default CubeSpinnerComponent;
//

//import React from 'react';
//import Helmet from 'react-helmet';
//import ReactDOMServer from 'react-dom/server';
//import classNames from 'classnames/bind';
//import styles from 'css/components/cubeSpinner.css';
//const cx = classNames.bind(styles);
//const Data = () => <div className={cx("stage")} style={{width:"300px", height:"300px",margin:"10px auto"}}>
//  <div className={cx("cubespinner")}>
//    {
//      this.props.data.map(function(item,index){
//        return (
//            <div className={cx("face"+(index+1)+"  face-ad")} key={"face_"+index}>
//              <a href={item.url} target="_blank">
//                <img src={item.images}/>
//              </a>
//            </div>
//        )
//      })
//    }
//
//
//  </div>
//</div>;
//
//
//ReactDOMServer.renderToString(<Data />);
//const CubeSpinnerComponent = Helmet.rewind();
//
//export default CubeSpinnerComponent;


