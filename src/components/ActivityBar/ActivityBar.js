import React, { Component, useState } from 'react';
import "./activity.css";
import { Button, Modal} from 'react-bootstrap';
import OrderSummaryModal from '../OrderSummary';

class ActivityBar extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            filterCategoryText: "All",
            filterRatingText:"All",
            
        });
    }

    handleFilteration = (event, ops) => {
        const filterText = event.target.value;
        let filterCategoryText ="";
        let filterRatingText ="";
        let filterNameText ="";
        
        let array = [this.props.items] || [];
        if (ops === 'category') {
            filterCategoryText = filterText;
        } else if (ops === 'rating') {
            filterRatingText = filterText;
        } else {
            filterNameText = filterText;
        }

        if(filterCategoryText==="All" || filterRatingText==="All"){
            this.resetFilter(event);
            array = [this.props.completeItems];
            if(filterCategoryText==="All" || filterRatingText==="All"){
                document.getElementById('btn-reset').style.display="none";
            }
            return;
        }  
        array.forEach((obj, idx) => {
            let filteredItems = obj.filter((item) => {
                let ok = true;

                if (filterCategoryText !== '') {
                    ok = (item.category.toLowerCase().search(filterCategoryText.toLowerCase()) > -1);
                }


                if (ok && filterRatingText !== '') {
                    ok = item.userRating == filterRatingText;
                }

                if (ok && filterNameText !== '') {
                    ok = (item.name.toLowerCase().search(filterNameText.toLowerCase()) > -1);
                }
                return ok;
            });
            obj = filteredItems;
            array[idx] = obj;
        });
       var temparray = array.reduce(function(prev, curr) {
        return prev.concat(curr);
      });
      document.getElementById('btn-reset').style.display="block";
        this.props.getFilteredData(temparray);
    }

    resetFilter = (event) => {
        this.props.getFilteredData(this.props.completeItems);
        this.setState({
            filterCategoryText: "All",
            filterRatingText:"All"
        });
    }
    setSummaryView = () => {
        let bool= true;
        this.props.showOrderSummary(bool);
    }
    
    render() {
        
        return(
            <div className="activity-bar row">
                <div className="col-lg-3 col-xs-3 col-md-3">
                    <label htmlFor="categoryfilter" className="pull-left">Category based Filter : </label>&nbsp;
                    <select name="categoryfilter" className="inputBox" onChange={e => this.handleFilteration(e, 'category')}>
                        <option value="All">{'All'}</option>
                        <option value="Burger">{'Burgers'}</option>
                        <option value="Pizza">{'Pizzas'}</option>
                        <option value="Drink">{'Drinks'}</option>
                    </select>
                </div>
                <div className="col-lg-3 col-xs-3 col-md-3">
                    <label htmlFor="ratingfilter" className="pull-left">Rating based Filter : </label>&nbsp;
                    <select name="ratingfilter" className="inputBox" onChange={e => this.handleFilteration(e, 'rating')}>
                        <option value="All">{'All'}</option>
                        <option value="1">{'★'}</option>
                        <option value="2">{'★★'}</option>
                        <option value="3">{'★★★'}</option>
                        <option value="4">{'★★★★'}</option>
                        <option value="5">{'★★★★★'}</option>
                    </select>
                </div>

                <div className="col-lg-3 col-xs-3 col-md-3">
                    <label htmlFor="namefilter" className="pull-left">Search:</label>
                    <input name="namefilter" type="text" autoFocus placeholder="Search" className="inputBox" onChange={e => this.handleFilteration(e, 'name')} onKeyDown={e=>this.resetFilter(e)}/>
                </div>
                <div className="col-lg-3 sucess-button col-xs-3 col-md-3">
                    <Button id="btn-reset" variant="secondary float-right" onClick={e=>this.resetFilter(e)}>Reset filter</Button>
                    <Button variant="success float-right"  onClick={this.setSummaryView}>Order Now</Button>
                </div>

            </div>
        );
    }
}

export default ActivityBar;