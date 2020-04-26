import React, { Component, useState } from 'react';
import "./ActivityBar/activity.css";
import { Button, Modal} from 'react-bootstrap';
import "../custom.css";

let total=0;
class OrderSummary extends Component {

    constructor(props) {
        super(props);
        this.setState({showModal:false});
    }

    componentWillMount() {
        this.setState({showModal:false});
    }
    getProductTotalPrice = (item) => {
        total = total+item.qty*item.price;
        return item.qty*item.price;
    }
    handleModelClose = () => {
        this.setState({showModal:false});
        this.props.showOrderSummary(false);
    }
    showModal = () => {
        this.setState({showModal:true});
    }

    
    render() {
        
        return(
            <div className="order-summary col-lg-12">
                <div className="order-header">Order Details:</div>
                    <div className="summary-sub-header"> Your order summary is :</div>
                     {this.props.selectedItems.map((item) => 
                        <div className="row">
                            <div className="product-and-quantity col-lg-4">{item.name} X {item.qty}</div>
                            <div className="product-price-multiplier float-right col-lg-4">{this.getProductTotalPrice(item)}</div>
                        </div>
                    )
                    } 
                    <div className="row order-total">
                    <div className="col-lg-4">Your total:</div>
                    <div className="col-lg-4">{total}</div>
                    </div>
                    <div class="row text-center">
                    <Button variant="success complete-button col-lg-6"  onClick={this.showModal}>Place My Order</Button>
                    </div>
                    <Modal show={this.state.showModal} onHide={this.handleModelClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Order Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="order-summary">
                                "Yayy!!!Your order has been confirmed. It will reach to your doorsteps within 45 minutes."
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" onClick={this.handleModelClose}>
                        Ok,Go to Homepage
                    </Button>
                    </Modal.Footer>
                    </Modal>
            </div>
        );
    }
}
export default OrderSummary;