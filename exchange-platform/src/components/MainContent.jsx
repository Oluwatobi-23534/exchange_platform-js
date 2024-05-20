import React from "react";

const MainContent = () => {
  // Define your trading pairs
  const tradingPairs = ["BTC/USD", "ETH/USD", "LTC/USD"];

  return (
    <main className="main">
      {/* Financial Candlestick Chart */}
      <div className="main__chart">
        <h2 className="main__title">Financial Candlestick Chart</h2>
        <p className="main__description">Chart goes here...</p>
      </div>

      {/* Trading Pairs List */}
      <div className="main__trading-pairs">
        <h2 className="main__title">Trading Pairs</h2>
        <ul className="main__list">
          {tradingPairs.map((pair) => (
            <li key={pair} className="main__item">
              {pair}
            </li>
          ))}
        </ul>
      </div>

      {/* Order Book */}
      <div className="main__order-book">
        <h2 className="main__title">Order Book</h2>
        <p className="main__description">Order book data goes here...</p>
      </div>

      {/* Buy and Sell Order Form */}
      <div className="main__order-form">
        <h2 className="main__title">Place an Order</h2>
        <form className="form">
          <label className="form__label">
            Price:
            <input type="number" name="price" className="form__input" />
          </label>
          <label className="form__label">
            Amount:
            <input type="number" name="amount" className="form__input" />
          </label>
          <button type="submit" className="form__button">
            Submit Order
          </button>
        </form>
      </div>
    </main>
  );
};

export default MainContent;
