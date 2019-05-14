import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Home from './Home'
import { About } from './About';
import{Contact} from './Contact'
class Menu extends React.Component {
   render() {
      return (
         <Router history = {browserHistory}>
         <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path = "home" component = {Home} />
            <Route path = "about" component = {About} />
            <Route path = "contact" component = {Contact} />
         </Route>
      </Router>
      );
   }
}
export default Menu;