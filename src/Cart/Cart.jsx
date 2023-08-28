import "./Cart.scss";
function Products() {
  return (
    <div className="sidebar">
      <div className="overlay"></div>
      <aside>
        <h1 className="title">Корзина</h1>
        <footer className="sidebar_footer">
          <div>
            <p>Итого: </p>
            <span></span>
            <b>21 498 руб. </b>
          </div>
          <div>
            <p>Налог 5%: </p>
            <span></span>
            <b>1074 руб. </b>
          </div>
          <button>
            <span>Оформить заказ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path
                d="M1 7H14.7143"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.71436 1L14.7144 7L8.71436 13"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </footer>
      </aside>
    </div>
  );
}

export default Products;
