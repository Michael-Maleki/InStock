import React from "react";
import axios from "axios";
// import {Link} from 'react-router-dom';
import InventoryList from "../Inventory/InventoryList";
// import locations from '../../data/locations.json'
import Header from "../Header/Header.js";

class WarehouseView extends React.Component {
  state = {
    isLoaded: false
  };

  displayController = state => {
    if (state.error && !state.locationData) {
      return <h1>This warehouse does not exist</h1>;
    } else if (state.error) {
      return (
        <>
          <section className="inventory">
            <div className="inventory__top">
              <h1 className="inventory--heading">Inventory</h1>
              <input
                className="warehouse__search"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="inventory--categories top-display--categories">
              <div id="only-item">item</div>
              <div>last ordered</div>
              <div>location</div>
              <div>quantity</div>
              <div>status</div>
            </div>
            <h1>This warehouse has no inventory</h1>
          </section>
        </>
      );
    } else
      return (
        <>
          <section className="warehouse-view">
            <div className="warehouse-view__top">
              <h1 className="warehouse-view--heading">{state.locationData.name}</h1>
            <div className='warehouse-view__info-wrapper'>
              <span className='warehouse-view__contact'>
                <p className="warehouse-view__label">Address</p>
                <p className=''>{state.locationData.address.street}</p>
                <p className='warehouse-view__margin-bottom'>{state.locationData.address.suiteNum}</p>
                <p className=''>{state.locationData.address.city}</p>
                <p className='warehouse-view__margin-bottom'>{state.locationData.address.postal}</p>
              </span>
              <span className='warehouse-view__contact'>
                <p className="warehouse-view__label">Contact</p>
                <p className=''>{state.locationData.contact.name}</p>
                <p className='warehouse-view__margin-bottom'>{state.locationData.contact.title}</p>
                <p className=''>{state.locationData.contact.phone}</p>
                <p className='warehouse-view__margin-bottom'>{state.locationData.contact.email}</p>
              </span>
              </div>
            </div>

            <div className="warehouse-view--categories top-display--categories">
              <div id="only-item">item</div>
              <div>last ordered</div>
              <div>location</div>
              <div>quantity</div>
              <div>status</div>
            </div>
            <InventoryList listData={state.warehouseInventory}/>
          </section>
        </>
      );
  };

  getWarehouses = () => {
    axios
      .get(this.props.urlBuilder("/warehouse"))
      .then(resp => {
        const { data } = resp;
        let locationData = data.find(
          location => location.id === this.props.match.params.warehouseId
        );

        console.log(locationData);
        this.setState({
          isLoaded: true,
          locationData: locationData
        });
      })
      .catch(error => {
        this.setState({
          errorWarehouse: error,
          isLoaded: true
        });
      });
  };

  getInventoryList = () => {
    axios
      .get(
        this.props.urlBuilder(
          `/warehouse/${this.props.match.params.warehouseId}`
        )
      )
      .then(resp => {
        if (resp.status === 200) {
          const { data } = resp;
          this.setState({
            warehouseInventory: data
          });
        }
      })
      .catch(error => {
        this.setState({
          error: error,
        });
      });
  };

  componentDidMount() {
    this.getInventoryList();
    this.getWarehouses();

  }

  render() {
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <>
          <h1 className="loading-error">Loading...</h1>
          <div className="loader" />
        </>
      );
    } else
      return (
        <>
          <Header />
          {this.displayController(this.state)}
        </>
      );
  }
}

export default WarehouseView;
