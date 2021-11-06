import React from "react";

export default function ShoppingCart(props) {
  const { cart, removeFromCart, history } = props;
  const total = cart.reduce((sum, d) => sum + d.price, 0);
  return (
    <div className="cart">
      {cart.map(goodie => (
        <div className="goodies-card" key={goodie.id}>
          <img className="goodies-image" src={goodie.img} alt={goodie.name} />
          <div className="goodies-details">
            <h2 className="goodies-name">{goodie.name}</h2>
            <p>${goodie.price}</p>
            <button
              className="goodies-button"
              onClick={() => removeFromCart(goodie)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="checkout-section">
        <p className="total">Total: ${total}</p>
        <button
          className="checkout"
          onClick={() => history.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
