import React from 'react';
import ReactDOM from 'react-dom';
import  Leftlayout from './components/leftlayout';
import  Middlelayout from './components/middlelayout';
import  Rightlayout from './components/rightlayout';
import './style.scss';
class Layout extends React.Component {
  render() {
    return ( 
        <div className="body_main">
          <Leftlayout/>
          <Middlelayout/>
        </div>
    );
  }
}

export default Layout;
