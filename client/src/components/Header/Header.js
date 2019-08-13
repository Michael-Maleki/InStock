import React from 'react';
//import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/Logo-instock.svg';




class Header extends React.Component {
  render() {
    return (
        <header>
          <nav className="nav-bar">
            <ul className="nav-bar__links">
              <li className="nav-bar__logo"><img src={Logo} alt=""/></li> {/*** The Link tag must be added on the 3 list items ****/}
              <li className="nav-bar__pages">
                <div className="nav-bar__pages__inventory">Inventory</div>
                <div className="nav-bar__pages__location">Location</div>
              </li>
              
            </ul>
          </nav>
        </header>
    )
  }
}

export default Header;