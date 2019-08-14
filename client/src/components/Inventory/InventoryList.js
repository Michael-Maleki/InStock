import React from 'react';


class InventoryList extends React.Component {

  

  render() {
    console.log(this.props.listData[0].name);
    return (
      <>
        {this.props.listData.map((item) => {
          return(
            <div>
              <div>item</div>
              <div>{item.name}</div>
              <div>last ordered</div>
              <div>{item.lastOrdered}</div>
              <div>location</div>
              <div>{item.location}</div>
              <div>quantity</div>
              <div>{item.quantity}</div>
              <div>status</div>
              <div>{(item.isInstock) ? 'In stock' : 'Out of stock'}</div>
            </div>
          )
          
        })}
      </>
    )
  }
}


export default InventoryList;