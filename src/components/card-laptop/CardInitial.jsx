/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "../../assets/styles/laptop/card.scss";
import arrow from "../../assets/images/laptop/icon/arrow.svg";
class CardInitial extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downhandler = () => {
    this.setState({
      counter: this.state.counter == 0 ? 0 : this.state.counter - 1,
    });
  };

  uphandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    // eslint-disable-next-line react/prop-types
    const { image, name, price } = this.props;
    return (
      <div className="card-container">
        <img className="img-laptop" src={image} alt="macbook" />
        <div className="card-container-detail">
          <h1>{name}</h1>
          <p>
            Price :{" "}
            {!this.state.counter
              ? price
              : `${this.state.counter} * ${price} $ =${
                  this.state.counter * price
                }`}{" "}
            $
          </p>
          <div>
            <img
              onClick={this.downhandler}
              className={
                !this.state.counter ? "filter-gray arrow-down" : "arrow-down"
              }
              src={arrow}
              alt="down"
            />
            <p>{this.state.counter}</p>
            <img
              onClick={this.uphandler}
              className="arrow-up"
              src={arrow}
              alt="up"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardInitial;
