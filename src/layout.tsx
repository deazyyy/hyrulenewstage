import React from 'react';
import ReactDOM from 'react-dom';
import  Leftlayout from './components/leftlayout';
import  Middlelayout from './components/middlelayout';
import  Rightlayout from './components/rightlayout';
import './style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Layout extends React.Component {
  render() {
    return ( 
      <Router>
        <div className="body_main">
          <Leftlayout/>
          <Middlelayout/>
        </div>
      </Router>
    );
  }
}

export default Layout;
