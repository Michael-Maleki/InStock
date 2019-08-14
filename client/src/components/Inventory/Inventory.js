import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'; 
//importing the fake data here:
import dataInventory from './data-inventory';
import InventoryList from './InventoryList';



class Inventory extends React.Component {

  state = {
    data: dataInventory
  }

  render() {
    console.log(this.state.data[0].name);
    return (
      <section className="inventory">
        <h1 className="inventory--heading">Inventory</h1>
        <div className="search-box">
            <img className="search-box__icon" src={searchIcon} alt="" />
            <input className="search-box__input" type="name" placeholder="Search" />
        </div>
        <div className="inventory--categories top-display--categories">
            <div>item</div>
            <div>last ordered</div>
            <div>location</div>
            <div>quantity</div>
            <div>status</div>
        </div>
        <InventoryList listData = {this.state.data}/> 
      </section>
    )
  }
}


export default Inventory;