import { useState } from "react";
import Header from "./Header/Header";
import Ads from "./components/Ads/Ads";
import InputSearch from "./Search/InputSearch";
// import Cart from "./Cart/Cart";
import Data from "./Data/Data";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Ads />
      <InputSearch />
      <main>
        <div className="card_box">
          {Data.map((obj) => (
            <Card
              key={Math.random()}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </main>
      {/* <Cart /> */}
    </div>
  );
}

export default App;
