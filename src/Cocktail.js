import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Cocktail({ cockTailList }) {
  return (
    <div className="container">
      {cockTailList.map((x) => {
        const {
          strDrink: drink,
          strAlcoholic: alcoholic,
          strDrinkThumb: image,
          strCategory: type,
        } = x;
        return (
          <div key={x.idDrink}>
            <div className="display-cocktail">
              <img src={image} alt="" />
              <h1>{drink}</h1>
              <h3>{type}</h3>
              <h2>{alcoholic}</h2>
              <Link className="details" to={`/details/${drink}`}>
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cocktail;
