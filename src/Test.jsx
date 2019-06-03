import React, { Component } from 'react';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
class Test extends Component {
   
    
    render() {
        return (
            <div>
                <Router>
                <Link to='/test2'>Test2</Link>
                <Link to='/test3'>Test3</Link>
               <h1>heloow1</h1> 
               <Route path='/test2' component={Test2}/>
               <Route path='/test3' component={Test3}/>
               </Router>
            </div>
        );
    }
}
const Test2 = ()=>{return(<h1>hellow2</h1>)}
const   Test3 = ()=>{return(<h1>hellow3</h1>)}
export default Test;