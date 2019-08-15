import React from 'react';
import axios from 'axios';
import Backarrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';

class ProductSummary extends React.Component{
   
   state= {
        isLoaded: false,
      }
      
      componentDidMount() {
        axios.get('//url')
        .then(response => {
            
            this.setState({
                isLoaded:true,
                inventorylist: response.data
            })
        }).catch(error => console.log(error))
    }
    
    render() {
  
      const {inventorylist} = this.state
  
      if (this.state.isLoaded === false) {
        return (
            <div className="product-summary-section">Loading ... </div>
        );

      } else
        return (
            <>  
								<div className="product-summary-section">
                {
                  this.state.inventorylist.map(item => ( 
                <div key={item.id} className="Full-Wrapper">
                    <div className="Full-Top-section">
											<div className="Top-section">
												<img className="Top-section__Icon" src={Backarrow} alt="back-arrow-icon"/>
												<h1 className="Top-section__header">Product Name</h1>
											</div>
											<button className="InStock-button" type="submit">In Stock</button>
                    </div>
                    <div>
											<div className="main-content"> 
											<	div className="contents">
                        <div  class="description-style">
													<h3 className="product-summary-section__title">ITEM DESCRIPTION</h3>
													<p className="product-summary-section__text description-text">{item.description}Here is a more detailed summary of the product name, it’s uses, industries and possible attributes that could be used to describe the product.</p>
                        </div>  
                        <div className="main-content-bottom">
                       <div id="ordered-reference">
                          <div class="product-summary">
														<h3 className="product-summary-section__title">ORDERED BY</h3>
														<p className="product-summary-section__text">Mark Saunders{item.name}</p>
                          </div>
                          <div>
                            <h3 className="product-summary-section__title">REFERENCE NUMBER</h3>
                            <p className="product-summary-section__text">JK2020FD7811201</p>
                        	</div>
                        </div>

                        <div id="last-ordered-location">

                            <div class="product-summary">
                                <h3 className="product-summary-section__title">LAST ORDERED</h3>
                                <p className="product-summary-section__text">5/24/2018{item.lastOrdered}</p>
                            </div>

                            <div>
                                <h3 className="product-summary-section__title location">LOCATION</h3>
                                <p className="product-summary-section__text location">Toronto, CAN{item.location}</p>
                            </div>

                        </div>
                            <h3 className="product-summary-section__title quantity">QUANTITY</h3>
                            <p className="product-summary-section__text quantity-item" >12000{item.quantity}</p>
                            <h3 className="product-summary-section__title categories">CATEGORIES</h3>
                            <p className="product-summary-section__title categories-text" id="last-paragraph">{item.categories}Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales</p>
                            </div> 

                        </div>
                        </div>
                     </div>
										 <button id="Edit-button" type="submit">EDIT</button>
                    </div>  
                    ))};
                  </div>      
             </>
						)
					}
         } 

export default ProductSummary;
