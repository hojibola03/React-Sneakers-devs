import React from "react";
import "./InputSearch.scss";
function InputSearch() {
  return (
    <section>
      <h1>Все кроссовки</h1>
      <div className="search-block">
        <img src="./src/Assets/search.svg" alt="Search" />
        <input placeholder="Поиск..." />
      </div>
    </section>
  );
}

export default InputSearch;
