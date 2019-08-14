import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Warehouses from './components/Warehouses/Warehouses.js'
import Inventory from './components/Inventory/Inventory.js'

class App extends React.Component {

  urlBuilder(endpoint) {
    return `http://localhost:8080${endpoint}`
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/warehouse/:warehouseId' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/warehouse' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/inventory/:inventoryId' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/inventory' render={(props) => <Inventory match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
