import React from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import Location from './Location/Location.js'
import locations from '../../data/locations.json'


class Warehouses extends React.Component {
  
    state= {
      isLoaded: false
    }


    // getWarehouses = () => {
    //   axios.get(urlBuilder(/warehouse))
    //   .then(resp => {
          // const {data} = resp
          // this.setState({
              // isLoaded:true,
              // locationData: data
          // })
    //   })
    // }

    componentDidMount() {
      // getWarehouses()
    }
  
  render() {
    console.log(locations)
    return(
      <main>
        <header>
          <h1>Locations</h1>
          <input type='search' placeholder='Search'/>
        </header>
        <ul className='warehouse__label-container'>
          <li className='warehouse__labe'>Warehouse</li>
          <li className='warehouse__labe'>Contact</li>
          <li className='warehouse__labe'>Contact Information</li>
          <li className='warehouse__labe'>Categories</li>
        </ul>
        <ul className='warehouse__list'>
          {/* <Location /> */
          
          locations.map(location => <Location key={location.id} location={location}/>)
          
          }
        </ul>
      </main>
    )
  }
}

export default Warehouses
