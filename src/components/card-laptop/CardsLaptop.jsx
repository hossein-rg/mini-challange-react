/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import CardInitial from "./CardInitial";
class CardsLaptop extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: "MacBook",
        price: 1500,
        image: "src/assets/images/laptop/macbook.JPG",
      },
      {
        id: 2,
        name: "Legion5",
        price: 1200,
        image: "src/assets/images/laptop/legion5.JPG",
      },
      {
        id: 3,
        name: "msi",
        price: 1800,
        image: "src/assets/images/laptop/msi.JPG",
      },
      {
        id: 4,
        name: "surface",
        price: 890,
        image: "src/assets/images/laptop/surface.JPG",
      },
    ];

    return (
      <div>
        {data.map((index) => {
          return (
            <CardInitial
              key={index.id}
              name={index.name}
              price={index.price}
              image={index.image}
            />
          );
        })}
      </div>
    );
  }
}

export default CardsLaptop;
