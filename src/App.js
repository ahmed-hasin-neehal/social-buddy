import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';

function App() {
  

  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route path = '/details/:postID'>
            <PostDetail></PostDetail>
          </Route>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
