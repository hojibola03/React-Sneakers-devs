import React from "react";
import "./Ads.scss";
function Ads() {
  return (
    <article>
      <div className="article_box">
        <img src="./src/Assets/Ads-brend.svg" alt="" />
        <div className="article_text">
          <h1 style={{ color: "#8bb43c" }}>Stan Smith, </h1>
          <h1>Forever!</h1>
          <button>Купить</button>
        </div>
      </div>
      <img className="ads_img" src="./src/Assets/Ads.png" alt="image" />
    </article>
  );
}

export default Ads;
