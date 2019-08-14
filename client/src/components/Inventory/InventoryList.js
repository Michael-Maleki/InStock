import React from 'react';


class InventoryList extends React.Component {

  

  render() {
    console.log(this.props.listData[0].name);
    return (
      <>
        {this.props.listData.map((item) => {
          return(
            <div key={item.id} id={item.id} className="inventory__items">

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
          )
        })}
      </>
    )
  }
}


export default InventoryList;