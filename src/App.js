import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Posts from './Component/Posts/Posts';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetail from './Component/PostDetail/PostDetail';

function App() {

  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/posts">
            <Posts />
          </Route> 
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
