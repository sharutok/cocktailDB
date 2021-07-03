import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function CocktailDetails({ cockTailList }) {
  const { name } = useParams();
  const indvList = cockTailList.filter((e) => {
    return e.strDrink === name;
  });
  return (
    <div>
      {indvList.map((x) => {
        const {
          strDrink,
          strCategory: Category,
          strAlcoholic,
          strInstructions,
          strDrinkThumb,
          strIngredient1: ing1,
          strIngredient2: ing2,
          strIngredient3: ing3,
          strGlass: Glass,
          strMeasure1,
        } = x;
        return (
          <div key={x.idDrink}>
            <div className="cocktail-details">
              <h1>{strDrink}</h1>
              <img src={strDrinkThumb} width="200" alt="" />
              <div className="cocktail-details-contents">
                <h2>{strAlcoholic}</h2>
                <h2>
                  <span>CATEGORIES: </span>
                  {Category}
                </h2>
                <h2>
                  <span> INSTRUCTION </span>
                  <br />
                  {strInstructions}
                </h2>

                <h2>
                  <span>MAIN INGREDIENTS</span>
                </h2>
                <ul>
                  {<li>{ing1}</li> || <li>N/A</li>}
                  {<li>{ing2}</li>}
                  {<li>{ing3 || "N / A"}</li> || <li>N/A</li>}
                </ul>
                <h2>
                  <span>GLASS SERVED: </span>
                  {Glass}
                </h2>
                <h2>
                  <span>MEASURMENT: </span>
                  {strMeasure1}
                </h2>
              </div>
            </div>
            <Link className="go-back" to="/">
              Go Back
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CocktailDetails;
