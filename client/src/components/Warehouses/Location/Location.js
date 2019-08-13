import React from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';

class Location extends React.Component {
  render() {
    const {address, contact, id, inventoryCategories, name} = this.props.location
    return(
      <li className="location__item" id={id}>
        <p className="location__text location__text--bold">{name}</p>
        <p className="location__text location__text--padding">{address.street}</p>
        <p className="location__text">{contact.name}</p>
        <p className="location__text location__text--padding">{contact.title}</p>
        <p className="location__text">{contact.phone}</p>
        <a className="location__mail location__text--padding" href="mailto:info@thebeesknees.com">{contact.email}</a>
        <p className="location__text">{inventoryCategories}</p>
      </li>
    )
  }
}

export default Location
