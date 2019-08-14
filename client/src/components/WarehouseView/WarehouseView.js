import React from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import InventoryList from '../Inventory/InventoryList'
// import locations from '../../data/locations.json'
import Header from '../Header/Header.js'

class WarehouseView extends React.Component {
  
    state= {
      isLoaded: false
    }

    displayController = (state) => {
      
      if (state.error) {
        return(<h1>This warehouse does not contain Inventory!</h1>)
      }
      else return(
        <InventoryList listData={this.state.warehouseInventory}/> 
      )
    }

    getWarehouses = () => {
      axios.get(this.props.urlBuilder('/warehouse'))
      .then(resp => {
          const {data} = resp

          let locationData = data.find(location => location.id === this.props.match.params.warehouseId)
          console.log(locationData)
          this.setState({
              isLoaded:true,
              locationData: locationData
          })
      }).catch(error => {
        this.setState({
          error: error,
          isLoaded: true
        })
      })
    }

    getInventoryList = () => {
      axios.get(this.props.urlBuilder(`/warehouse/${this.props.match.params.warehouseId}`))
      .then(resp => {
        if (resp.status === 200) {
          const {data} = resp
          this.setState({
              isLoaded:true,
              warehouseInventory: data
          })
        }
      }).catch(error => {
        this.setState({
          error: error,
          isLoaded: true
        })
      })
    }

    componentDidMount() {
      this.getInventoryList()
      if (!this.props.locationData.toString()) {
        this.getWarehouses()
        console.log('manually fetched')
      }
    }
  
  render() {
    console.log(this.state)
    const {isLoaded} = this.state
    if (!isLoaded) {
      return (
        <>
          <h1 className="loading-error">Loading...</h1>
          <div className="loader" />
        </>
      );
    } else

    return(
      <>
      <Header />
      <section className="inventory">
        <div className= "inventory__top">
          <h1 className="inventory--heading">Inventory</h1>
          <input className='warehouse__search' type='search' placeholder='Search'/>
        </div>
        
        <div className="inventory--categories top-display--categories">
            <div id="only-item">item</div>
            <div>last ordered</div>
            <div>location</div>
            <div>quantity</div>
            <div>status</div>
        </div>
        {
          this.displayController(this.state)
        }
      </section>
      </>
    )
  }
}

export default WarehouseView
