import React from 'react';
import rightArrow from '../../../assets/Icons/SVG/Icon-arrow-right.svg'
// import axios from 'axios';
// import {Link} from 'react-router-dom';

class Location extends React.Component {
  render() {
    const {address, contact, id, inventoryCategories, name} = this.props.location
    
    return(
      <li className="location__item" id={id}>
        <div className='location__content-flex'>
          <p className="location__text location__text--bold">{name}</p>
          <p className="location__text location__text--padding">{address.street}</p>
          <p className="location__text">{contact.name}</p>
          <p className="location__text location__text--padding">{contact.title}</p>
          <p className="location__text">{contact.phone}</p>
          <a className="location__mail location__text--padding" href="mailto:info@thebeesknees.com">{contact.email}</a>
          <p className="location__text">{inventoryCategories}</p>
        </div>
        {/* <Link to='/'> */}
          <img className='location__arrow'src={rightArrow} alt='right-arrow'/>
        {/* </Link> */}
      </li>
    )
  }
}

export default Location
