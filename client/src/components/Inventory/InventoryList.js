import React from 'react';
import removeIcon from '../../assets/Icons/SVG/Icon-kebab-default.svg'


class InventoryList extends React.Component {

  state = {
    showOption: false
  }


  /******** the function to hide remove option by clicking anywhere ******/
  handleClicksOutside = (event) => {
    //console.dir(event.currentTarget.elements[0].className);
    const outsideClick = event.currentTarget.elements; 
    
    if (this.state.showOption === true) {
      for (let i = 0; i < outsideClick.length; i++) {
        outsideClick[i].className = 'remove-option-hidden'
      }
      this.setState({
        showOption: false
      })
    }
    
  }

/********* The function to pop the remove button when kebab icon is clicked *********/
  showRemoveOption = (event) => {
    if (this.state.showOption === true) {
      event.target.nextSibling.className = 'remove-option-hidden';
      this.setState({
        showOption: !this.state.showOption
      })

    } else {
      //console.log(event.target.nextSibling.className);
      event.target.nextSibling.className = 'remove-option-displayed';
      this.setState({
        showOption: !this.state.showOption
      })
    }
  }


  render() {

    //console.log(this.state.showOption);

    return (
      <form onClick={this.handleClicksOutside}>
        {this.props.listData.map((item) => {
          return(
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

              <div className="remove">
                  <img className="remove-btn-image" onClick={this.showRemoveOption} src={removeIcon} alt=""/>
                  <button className='remove-option-hidden' type="submit" onClick={this.deleteItem}>Remove</button>
              </div>
            </div>  
          )
        })}
      </form>
    )
  }
}


export default InventoryList;