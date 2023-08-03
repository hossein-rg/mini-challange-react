/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "../../assets/styles/laptop/card.scss";
import arrow from "../../assets/images/laptop/icon/arrow.svg";
class CardInitial extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { image, name, price } = this.props;
    return (
      <div className="card-container">
        <img className="img-laptop" src={image} alt="macbook" />
        <div className="card-container-detail">
          <p>{name}</p>
          <p>Price : {price} $</p>
          <div>
            <img className="arrow-down" src={arrow} alt="down" />
            <p>0</p>
            <img className="arrow-up" src={arrow} alt="up" />
          </div>
        </div>
      </div>
    );
  }
}

export default CardInitial;
