import { useState } from "react";
import "./Header.scss";
function Header() {
  const [openMenu, setOpenMenu] = useState(true);
  console.log(openMenu);
  return (
    <header>
      <div className="logo_box">
        <img width={40} height={40} src="./src/Assets/logo.svg" alt="logo" />
        <div>
          <h3>React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      {openMenu ? (
        <div
          className="burger"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <nav className="sect">
          <div
            onClick={() => {
              setOpenMenu("false");
            }}
            className="x"
          >
            x
          </div>
          <ul>
            <li>
              <img
                width={18}
                height={18}
                src="./src/Assets/cart.svg"
                alt="icon"
              />
              <p>1205 руб.</p>
            </li>
            <li>
              <img
                width={20}
                height={20}
                src="./src/Assets/heart.svg"
                alt="heart"
              />
            </li>
            <li>
              <img
                width={20}
                height={20}
                src="./src/Assets/user.svg"
                alt="heart"
              />
            </li>
          </ul>
        </nav>
      )}
      {openMenu && (
        <div className="div">
          <ul>
            <li>
              <img
                width={18}
                height={18}
                src="./src/Assets/cart.svg"
                alt="icon"
              />
              <p>1205 руб.</p>
            </li>
            <li>
              <img
                width={20}
                height={20}
                src="./src/Assets/heart.svg"
                alt="heart"
              />
            </li>
            <li>
              <img
                width={20}
                height={20}
                src="./src/Assets/user.svg"
                alt="heart"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
export default Header;
