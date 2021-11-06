import React, { Component } from "react";
// import axios from "axios";
import { goodiesData } from "../data";

export default class ItemList extends Component {
  state = {
    goodies: goodiesData
  }
  // componentDidMount() {
  //   axios.get("http://localhost:3333/goodies")
  //     .then(res => {
  //       this.setState({ goodies: res.data });
  //     })
  //     .catch(err => console.error(err));
  // }
  render() {
    return (
      <main className="goodies-list">
        {this.state.goodies.map(goodies => (
          <div className="goodies-card" key={goodies.id} data-testid="goodies-card">
            <img className="goodies-image" src={goodies.img} alt={goodies.name} />
            <div className="goodies-details">
              <h2 className="goodies-name">{goodies.name}</h2>
              <p className="goodies-key-description">{goodies.keyDescription}</p>
              <p>{goodies.description}</p>
              <div className="goodies-bottom-row">
                <p>🍪 Sweet {goodies.sweet}/10</p>
                <p>🥨 Salty {goodies.salty}/10</p>
                <p>🥧 Chewy {goodies.chewy}/10</p>
                <p>💰 Price ${goodies.price}</p>
              </div>
              <button
                className="goodies-button"
                onClick={() => this.props.addToCart(goodies)}
              >
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
