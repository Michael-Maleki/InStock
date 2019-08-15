import React from 'react';
import removeIcon from '../../assets/Icons/SVG/Icon-kebab-default.svg'
import  { Link } from 'react-router-dom'


class InventoryList extends React.Component {

  state = {
    showOption: false,
    className: 'remove-option-hidden'
  }

  showRemoveOption = (event) => {
    console.log(event.target.id)
    if (this.state.showOption === true) {
      this.setState({
        showOption: !this.state.showOption,
        className: 'remove-option-hidden'
      })
    } else {
      this.setState({
        showOption: !this.state.showOption,
        className: 'remove-option-displayed'
      })
    }
  }


  render() {
    return (
      <>
        {this.props.listData.map((item) => {
          return(
            <Link to={`/inventory/${item.id}`}> 
            <div key={item.id} id={item.id} className="inventory__items">
              <div className="inventory__content">
                <div className="inventory__first-item">
                  <div className="inventory--categories">item</div>
                  <div className="inventory__products--details product-name">{item.name}</div>
                  <div className="inventory__products--details product-description">{item.description}</div>
                </div>

                <div className="inventory--categories">last ordered</div>
                <div className="inventory__products--details">{item.lastOrdered}</div>

                <div className="inventory--categories">location</div>
                <div className="inventory__products--details">{item.location}</div>

                <div className="inventory--categories">quantity</div>
                <div className="inventory__products--details">{item.quantity}</div>

                <div className="inventory--categories">status</div>
                <div className="inventory__products--details">{(item.isInstock) ? 'In stock' : 'Out of stock'}</div>
              </div>

              <div id={item.id} className="remove">
                  <img className="remove-btn-image" onClick={this.showRemoveOption} src={removeIcon} alt=""/>
                  <button className={this.state.className}>Remove</button>
              </div>
            </div>  
            </Link>
          )
        })}
      </>
    )
  }
}


export default InventoryList;