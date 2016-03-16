import './main.css';
import {Router, Route, Link} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Feed from './components/FeedView.jsx';
import Show from './components/Show.jsx';
import Image from './components/Image.jsx';

ReactDOM.render(<Header />, document.getElementById('app'));
ReactDOM.render(<Feed />, document.getElementById('show'))

render((
  <Router history={hashHistory}>
    <Route path="/" component={Feed}>
      {/* make them children of `App` */}
      <Route path="/:imageId" component={Image}/>
    </Route>
  </Router>
), document.body)
