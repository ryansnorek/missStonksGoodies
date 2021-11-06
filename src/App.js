import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import ItemList from "./components/ItemList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // add a goody to the cart
  const addToCart = goodie => {
    setCart([...cart, goodie]);
  };
  // remove a goodie from the cart
  const removeFromCart = goodie => {
    setCart(cart.filter((item) => item.id !== goodie.id));
  };
  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            Miss Stonk's Goodies <span role="img">🧁 </span>
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Goodies
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Basket
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <ItemList addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;
