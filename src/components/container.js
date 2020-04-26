import React, { Component } from 'react';
import GridCard from "./GridCard";
import ActivityBar from './ActivityBar/ActivityBar';
import "../custom.css";
import OrderSummary from './OrderSummary';

const localSelectedArray = [];
class Container extends Component {

    constructor(props) {
        super(props);
        this.setState({items : this.props.items,
        selectedArr:[],
        showOrderSummary :false});
    }

    componentWillMount() {
        this.setState({items:this.props.items})
    }

    showOrderSummary = (flag) => {
        this.setState({showOrderSummary: flag})
    }


    addToSelection = (data) => {
        // eslint-disable-next-line no-unused-expressions
        localSelectedArray.indexOf(data) === -1 ? localSelectedArray.push(data):"";
        this.setState({selectedArr:localSelectedArray});
    }
    getFilteredData =(filteredItems)=>{
        this.setState({items : filteredItems});
    }

    render() {
        const renderItem = <div className="row margin-auto">{
            this.state.showOrderSummary ? 
                <OrderSummary selectedItems={this.state.selectedArr}
                showOrderSummary = {this.showOrderSummary}/>
            : this.state.items.map((foodItem,index) => 
            <GridCard
            item = {foodItem}
            index = {index}
            addToSelection={this.addToSelection}
            />
            )}
         </div>
        return([
            <div className="jumborton"><ActivityBar completeItems={this.props.items}
            showOrderSummary = {this.showOrderSummary}
            items={this.state.items}
            getFilteredData= {this.getFilteredData}/></div>,
            renderItem
        ]
        );
    }
}

export default Container;