import React from 'react';
import axios from 'axios';
import Backarrow from '../../assets/Icons/SVG/Icon-back-arrow.svg';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

class ProductSummary extends React.Component{
   
   state= {
				isLoaded: false,
				inventorydata: {}
      }
      
      componentDidMount() {
        axios.get(`http://localhost:8080/inventory/${this.props.match.params.inventoryId}`)
        .then(response => {
            
            this.setState({
                isLoaded:true,
                inventorydata: response.data
						})
						console.log(response.data)
        }).catch(error => console.log(error))
    }
    
    render() {
  
      // const {inventorydata} = this.state
  
      if (this.state.isLoaded === false) {
        return (
            <div className="product-summary-section">Loading ... </div>
        );

      } else
        return (
            <>  <Header/>
								<div className="product-summary-section">
                {
                  this.state.inventorydata.map(item => ( 
                <div key={item.id} className="Full-Wrapper">
                    <div className="Full-Top-section">
											<div className="Top-section">
                      <Link to={'/inventory'}><img className="Top-section__Icon" src={Backarrow} alt="back-arrow-icon"/></Link>
												<h1 className="Top-section__header">{item.name}</h1>
											</div>
											<button className="InStock-button" type="submit">
                      { item.quantity == 0 ? "Out of stock" : "In Stock"}
                      </button>
                    </div>
                    <div>
											<div className="main-content"> 
											<	div className="contents">
                        <div  class="description-style">
													<h3 className="product-summary-section__title">ITEM DESCRIPTION</h3>
													<p className="product-summary-section__text description-text">{item.description}</p>
                        </div>  
                        <div className="main-content-bottom">
                       <div id="ordered-reference">
                          <div class="product-summary">
														<h3 className="product-summary-section__title">ORDERED BY</h3>
														<p className="product-summary-section__text">Mark Saunders</p>
                          </div>
                          <div>
                            <h3 className="product-summary-section__title">REFERENCE NUMBER</h3>
                            <p className="product-summary-section__text">{item.warehouseId}</p>
                        	</div>
                        </div>

                        <div id="last-ordered-location">

                            <div class="product-summary">
                                <h3 className="product-summary-section__title">LAST ORDERED</h3>
                                <p className="product-summary-section__text">{item.lastOrdered}</p>
                            </div>

                            <div>
                                <h3 className="product-summary-section__title location">LOCATION</h3>
                                <p className="product-summary-section__text location">{item.location}</p>
                            </div>

                        </div>
                            <h3 className="product-summary-section__title quantity">QUANTITY</h3>
                            <p className="product-summary-section__text quantity-item" >{item.quantity}</p>
                            <h3 className="product-summary-section__title categories">CATEGORIES</h3>
                            <p className="product-summary-section__title categories-text" id="last-paragraph">{item.categories}</p>
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
