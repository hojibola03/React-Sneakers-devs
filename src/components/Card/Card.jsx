import { useState } from "react";
import "./Card.scss";

function Card(props) {
  const [like, setLike] = useState(false);
  const [complate, setComplate] = useState(false);
  const likeClick = () => {
    setLike(!like);
  };
  const complateClick = () => {
    setComplate(!complate);
  };
  return (
    <div className="card">
      <div className="favorite">
        <img
          src={like ? "./src/Assets/like.svg" : "./src/Assets/unlike.svg"}
          onClick={likeClick}
          alt="like"
        />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="card_footer">
        <div className="price">
          <p>Цена:</p>
          <b>{props.price} руб.</b>
        </div>
        <img
          onClick={complateClick}
          height={32}
          width={32}
          src={complate ? "./src/Assets/unplus.svg" : "./src/Assets/plus.svg"}
          alt="+"
        />
      </div>
    </div>
  );
}
export default Card;
