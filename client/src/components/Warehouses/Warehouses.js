import React from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import Header from '../Header/Header'
import ModalPlus from '../Modal/ModalPlus'
import Modal from 'react-modal';
import Location from './Location/Location.js'
import locations from '../../data/locations.json'




class Warehouses extends React.Component {

  state = {
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

    // const {isLoaded, error} = this.state

    // if (error) {
    //   return (
    //     <>
    //       <h1 className="loading-error">Error: {error.message}</h1>
    //       <p className="error-emoji">
    //         <span role="img" aria-label="cry-face emoji">
    //           &#128557;
    //         </span>
    //       </p>
    //     </>
    //   );
    // } else if (!isLoaded) {
    //   return (
    //     <>
    //       <h1 className="loading-error">Loading...</h1>
    //       <div className="loader" />
    //     </>
    //   );
    // } else

    return (
      <>
        <Header />
        <main className='warehouse'>

          <header className='warehouse__header'>
            <h1 className='warehouse__title'>Locations</h1>
            <input className='warehouse__search' type='search' placeholder='Search' />
          </header>
          <ul className='warehouse__list'>
            {/* <Location /> */

              locations.map(location => <Location key={location.id} location={location} />)

            }
          </ul>
        </main>
      </>
    )
  }
}

export default Warehouses
