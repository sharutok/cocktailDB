import React from "react";
function Search({ setDefCocktail }) {
  function totalCocktail(e) {
    setDefCocktail(e.target.value);
  }
  return (
    <div className="search-input">
      <form action="">
        <input
          placeholder="🍹 Search your drink"
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => (e.target.placeholder = "🍹 Search your drink")}
          type="text"
          onChange={(e) => {
            totalCocktail(e);
          }}
        />
      </form>
    </div>
  );
}

export default Search;
