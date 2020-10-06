import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

/*Functional basesd Architecture*/

const Demo =({name}) =>{
    return  <div className="mainDiv">
           <h1>Hello {name}</h1>
                  <p>This is para</p>
                    </div>
}
// const Demo =(props) =>{
//     return  <div className="mainDiv">
//            <h1>Hello {props.name}</h1>
//                   <p>This is para</p>
//                     </div>
// }

/*Component bases Architecture*/
// class Demo extends Component{
//     render(){
//         return <div className="mainDiv">
//          <h1>Hello {this.props.name}</h1>
//                 <p>This is para</p>
//                 </div>
//     }
// }

export default Demo;