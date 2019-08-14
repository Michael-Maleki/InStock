import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Warehouses from './components/Warehouses/Warehouses.js'
import WarehouseView from './components/WarehouseView/WarehouseView.js'
import Inventory from './components/Inventory/Inventory.js'

class App extends React.Component {

  urlBuilder(endpoint) {
    return `http://localhost:8080${endpoint}`
  }

  handleWarehouseClick= (data) => {
    console.log(data)
      this.setState({locationData: data})
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/warehouse/:warehouseId' render={(props) => <WarehouseView match={props.match} urlBuilder={this.urlBuilder} locationData={this.state.locationData}/>}/>
          <Route path='/warehouse' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/inventory/:inventoryId' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/inventory' render={(props) => <Inventory match={props.match} urlBuilder={this.urlBuilder}/>}/>
          <Route path='/' render={(props) => <Warehouses match={props.match} urlBuilder={this.urlBuilder} handleWarehouseClick={this.handleWarehouseClick}/>}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
