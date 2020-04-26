import React, { Component } from 'react';
import "./quantity-button.css";

export default class Quantitybutton extends Component {

  constructor(props) {
    super(props);

    this.state = {qtyValue: this.props.min, disableDec: true, disableInc: false}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const plusState = this.state.qtyValue + 1;
    if (this.state.qtyValue < this.props.max){
      this.setState({qtyValue: plusState});
      this.props.qtyValue(plusState);
      this.setState({disable: false});
    }
    if (this.state.qtyValue == (this.props.max - 1)) {
      this.setState({disableInc: true});
    }
    if (this.state.qtyValue == this.props.min) {
      this.setState({disableDec: false});
    }
  }

  decrement() {
    const minusState = this.state.qtyValue - 1;
    if (this.state.qtyValue > this.props.min) {
      this.setState({qtyValue: minusState });
        this.props.qtyValue(minusState);
      if (this.state.qtyValue == this.props.min + 1) {
        this.setState({disableDec: true});
      }
    } else {
      this.setState({qtyValue: this.props.min});
    }
    if (this.state.qtyValue == this.props.max) {
      this.setState({disableInc: false});
    }
  }

  render() {
    const { disableDec, disableInc } = this.state;

    return (
      <span className="quantity-picker">
        <button className={`${disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left`} onClick={this.decrement}>&ndash;</button>
        <input className="quantity-display" type="text" value={this.state.qtyValue} readOnly />
        <button className={`${disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`} onClick={this.increment}>&#xff0b;</button>
      </span>
    );
  }
}