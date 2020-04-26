import React, { Component } from 'react';
import '../custom.css';
import StarRatingComponent from 'react-star-rating-component';
import QuantityButton from './QuantityButton/Quantity-button';

class GridCard extends Component {

    constructor(props) {
        super(props);
    }

    qtyValue =(currentquantity)=>{
        let selectedArray = this.props.item;
        selectedArray.qty = currentquantity;
        this.props.addToSelection(selectedArray);
    }
    render() {
        let imgAltText = "img"+ this.props.index; 
        let item = this.props.item; 
        return(
        <div className="col-lg-4 margin-card">
            <img className="product-image" src = {item.imgSrc} alt={imgAltText} width="100%" height="250px"/>
            <p className="product-name text-center font-weight-bold">{item.name}</p>
            <p className="product-desc border-top-0 rounded-bottom text-center">{item.description}</p>
            <div className=" rating-and-price">
                <div className="float-left">
                    <StarRatingComponent 
                    name="rate1" 
                    editing={false}
                    value={item.userRating}
                    />
                </div>
                <div className="float-right product-price">Price : {item.price} ₹</div>
            </div>
            <div className="text-center quantity-info ">
            <QuantityButton qtyValue={this.qtyValue} min={0} max={4}/>
            </div>
        </div>
        );
    }
}

export default GridCard;