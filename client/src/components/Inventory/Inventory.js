import React from 'react';
import searchIcon from '../../assets/Icons/SVG/Icon-search.svg'; 
import axios from 'axios';
import InventoryList from './InventoryList';
import Header from '../Header/Header.js';
import ModalPlus from '../Modal/ModalPlus';
// import Modal from 'react-modal';
class Inventory extends React.Component {

  state = {
    isLoaded: false
  }

  deleteInventoryItem = (event) => {
    event.preventDefault();
    axios.delete(this.props.urlBuilder('/inventory'), { 
      data: {
      id: event.target.id
      }
    })
    .then((response) => {
      window.location.reload();
    })
  }

  getInventory = () => {
      axios.get(this.props.urlBuilder('/inventory'))
      .then(resp => {
          const {data} = resp
          this.setState({
              isLoaded:true,
              inventoryData: data
          })
      }).catch(error => {
        this.setState({
          error: error,
          isLoaded: true
        })
      })
    }

    componentDidMount() {
      this.getInventory();
    }

  render() {

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
    return (
      <>
      <Header />
      <section className="inventory">
        <div className= "inventory__top">
          <h1 className="inventory--heading">Inventory</h1>
          <div className="search-box">
            <img className="search-box__icon" src={searchIcon} alt="" />
            <input className="search-box__input" type="name" placeholder="Search" />
          </div>
        </div>
        
        <div className="inventory--categories top-display--categories">
            <div id="only-item">item</div>
            <div>last ordered</div>
            <div>location</div>
            <div>quantity</div>
            <div>status</div>
        </div>

        <InventoryList listData={this.state.inventoryData} deleteItem={this.deleteInventoryItem}/> 
        <ModalPlus />

      </section>
      </>
    )
  }
}


export default Inventory;