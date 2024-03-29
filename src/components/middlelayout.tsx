import React from 'react';
import ReactDOM from 'react-dom';
import  Landing from './../views/Home/landing';
import  Farm from './../views/Farm/farm';
import  Gambling from './../views/Gambling/gambling';
import  Kokiri from './../views/Kokiri/kokiri';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Middlelayout extends React.Component {
  render() {
    return(
        <div className="middle_layout_outer"> 
              <div className="middle_layout home">
                <Switch>
                  <Route path="/farm">
                    <Farm />
                  </Route>
                  <Route path="/gambling">
                    <Gambling />
                  </Route>
                  <Route path="/kokiri">
                    <Kokiri />
                  </Route>
                  <Route path="/">
                    <Landing />
                  </Route>
                </Switch>
              </div>
            
        </div>
    );
  }
}

export default Middlelayout;
