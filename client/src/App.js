import React from 'react';
//commented out to remove the warnings
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import ProductSummary from './components/ProductSummary/ProductSummary';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Warehouses from './components/Warehouses/Warehouses.js'
import WarehouseView from './components/WarehouseView/WarehouseView.js'
import Inventory from './components/Inventory/Inventory.js'

class App extends React.Component {

  state={
    selectedData: []
  }

  urlBuilder(endpoint) {
    return `http://localhost:8080${endpoint}`
  }

  render() {
    return (
      <>
        
      <Router>
        <Switch>
          <Route path='/warehouse/:warehouseId' render={(props) => <WarehouseView match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/warehouse' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/inventory/:inventoryId' render={(props) => <ProductSummary match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/inventory' render={(props) => <Inventory match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
