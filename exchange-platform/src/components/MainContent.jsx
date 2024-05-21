import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/MainContent.css";
import { Btc } from "./images/images";
import { Link } from "react-router-dom";
import Markets from "./Trading";

const MainContent = () => {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
      );
      // Calculate the percentage change for the 24-hour high and low prices
      const highChangePercent = (
        ((response.data.highPrice - response.data.lastPrice) /
          response.data.lastPrice) *
        100
      ).toFixed(3);
      const lowChangePercent = (
        ((response.data.lowPrice - response.data.lastPrice) /
          response.data.lastPrice) *
        100
      ).toFixed(3);

      const dataWithPercentages = {
        ...response.data,
        highChangePercent,
        lowChangePercent,
        lastPrice: Number(response.data.lastPrice).toFixed(3),
        priceChange: Number(response.data.priceChange).toFixed(3),
        priceChangePercent: Number(response.data.priceChangePercent).toFixed(3),
        highPrice: Number(response.data.highPrice).toFixed(3),
        lowPrice: Number(response.data.lowPrice).toFixed(3),
        volume: Number(response.data.volume).toFixed(3),
      };

      setData(dataWithPercentages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div class="top__info">
        <div className="coin__drop">
          <img src={Btc} alt="Bitcoin logo" />
          <span>BTC/USDT</span>
          <Link>
            <i className="bi bi-caret-down"></i>
          </Link>
        </div>
        <div class="frame">
          {data && (
            <>
              <div>
                <p class="white ">
                  <span class="green separator">${data.lastPrice}</span>
                </p>
              </div>

              <div>
                <p class="white">
                  <div>
                    <i class="bi bi-clock-history history-icon"></i> 24h Change:
                  </div>
                  <span class="green">${data.priceChange}</span> (
                  <span class="green">{data.priceChangePercent}%</span>)
                </p>
              </div>

              <div>
                <p class="green">
                  <div>
                    <i class="bi bi-arrow-up history-icon"></i>24h High:
                  </div>
                  <span class="white">${data.highPrice}</span> (
                  <span class="white">{data.highChangePercent}%</span>)
                </p>
              </div>
              <div>
                <p class="green">
                  <div>
                    <i class="bi bi-arrow-down history-icon"></i>24h Low:
                  </div>
                  <span class="white">${data.lowPrice}</span> (
                  <span class="white">{data.lowChangePercent}%</span>)
                </p>
              </div>

              <div>
                <p class="green">
                  <div>
                    <i class="bi bi-bar-chart-line history-icon"></i>24h Volume:
                  </div>
                  <span class="white">${data.volume}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <Markets />
    </main>
  );
};

export default MainContent;
