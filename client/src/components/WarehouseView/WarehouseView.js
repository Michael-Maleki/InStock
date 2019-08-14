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

    getInventoryList = () => {
      axios.get(this.props.urlBuilder(`/warehouse/${this.props.match.params.warehouseId}`))
      .then(resp => {
          const {data} = resp
          this.setState({
              isLoaded:true,
              locationData: this.props.locationData,
              warehouseInventory: data
          })
      }).catch(error => {
        this.setState({
          error: error,
          isLoaded: true
        })
      })
    }

    componentDidMount() {
      this.getInventoryList()
    }
  
  render() {
    console.log(this.state.locationData)
    const {isLoaded, error} = this.state

    if (error) {
      return (
        <>
          <h1 className="loading-error">Error: {error.message}</h1>
          <p className="error-emoji">
            <span role="img" aria-label="cry-face emoji">
              &#128557;
            </span>
          </p>
        </>
      );
    } else if (!isLoaded) {
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
        <InventoryList listData={this.state.warehouseInventory}/> 
      </section>
      </>
    )
  }
}

export default WarehouseView
