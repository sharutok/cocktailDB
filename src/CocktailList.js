import React from "react";
import Message from "./Message";
import Search from "./Search";
import Cocktail from "./Cocktail";

function CocktailList({
  cockTailList,
  setDefCocktail,
  setCockTailList,
  setShowMessage,
  showMessage,
}) {
  return (
    <>
      <div>
        <Search setDefCocktail={setDefCocktail} />
        {showMessage ? <Message /> : <Cocktail cockTailList={cockTailList} />}
      </div>
    </>
  );
}

export default CocktailList;
