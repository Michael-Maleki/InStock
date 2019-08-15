import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Warehouses from './components/Warehouses/Warehouses.js'

class App extends React.Component {

  urlBuilder(endpoint) {
    return `http://localhost:5000${endpoint}`
  }

  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path='/' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
