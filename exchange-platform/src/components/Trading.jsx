import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import axios from "axios";
import "./css/Trading.css";

const Trading = () => {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState("1d"); // default timeframe
  const chartRef = useRef(null);
  const volumeChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=${timeframe}`
        );
        const data = response.data.map((item) => ({
          time: item[0] / 1000,
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
          volume: parseFloat(item[5]), // Add volume data
        }));
        setData(data);
      } catch (error) {
        console.error("Failed to fetch data from Binance API", error);
      }
    };

    fetchData();
  }, [timeframe]); 

  useLayoutEffect(() => {
    let chart = null;
    let volumeChart = null;

    if (data.length > 0 && chartRef.current && volumeChartRef.current) {
      const chartOptions = {
        width: 900,
        height: 200,
        layout: {
          backgroundColor: "rgba(0, 0, 0, 0.9)", // 90% opaque black
          textColor: "#FFFFFF",
        },
        grid: {
          vertLines: {
            color: "#2B2B2B",
          },
          horzLines: {
            color: "#363636",
          },
        },
      };

      chart = createChart(chartRef.current, chartOptions);
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#4bffb5",
        downColor: "#ff4976",
        borderDownColor: "#ff4976",
        borderUpColor: "#4bffb5",
        wickDownColor: "#838ca1",
        wickUpColor: "#838ca1",
      });
      candlestickSeries.setData(data);

      // Create a separate chart for volume
      const volumeChartOptions = {
        ...chartOptions,
        height: 200, // Adjust the height as needed
      };

      volumeChart = createChart(volumeChartRef.current, volumeChartOptions);
      const volumeSeries = volumeChart.addHistogramSeries({
        color: "#26a69a",
        lineWidth: 2,
        priceFormat: {
          type: "volume",
        },
        overlay: true,
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });

      volumeSeries.setData(
        data.map((item) => ({
          time: item.time,
          value: item.volume,
          color: item.open < item.close ? "#26a69a" : "#ef5350",
        }))
      );
    }

    // Cleanup function
    return () => {
      if (chart) {
        chart.remove();
      }
      if (volumeChart) {
        volumeChart.remove();
      }
    };
  }, [data]);

  return (
    <div className="trading">
      <div className="first">
        <div className="time-intervals">
          <p>Time</p>
          <button onClick={() => setTimeframe("1m")}>1M</button>
          <button onClick={() => setTimeframe("5m")}>5M</button>
          <button onClick={() => setTimeframe("15m")}>15M</button>
          <button onClick={() => setTimeframe("30m")}>30M</button>
          <button onClick={() => setTimeframe("1h")}>1H</button>
          <button onClick={() => setTimeframe("5h")}>5H</button>
          <button onClick={() => setTimeframe("1d")}>1D</button>
          <button onClick={() => setTimeframe("1w")}>1W</button>
          <button onClick={() => setTimeframe("1M")}>1M</button>
        </div>
        <div className="fx-indicators">
          {/* Display OHLC values here */}
          {data.length > 0 && (
            <div>
              <p>
                O: <span>{data[data.length - 1].open}</span>
              </p>
              <p>
                H: <span>{data[data.length - 1].high}</span>
              </p>
              <p>
                L: <span>{data[data.length - 1].low}</span>
              </p>
              <p>
                C: <span>{data[data.length - 1].close}</span>
              </p>
              <p>
                Change:{" "}
                <span>
                  {(
                    data[data.length - 1].close - data[data.length - 2].close
                  ).toFixed(2)}
                </span>
              </p>
              <p>
                Amplitude:{" "}
                <span>
                  {(
                    data[data.length - 1].high - data[data.length - 1].low
                  ).toFixed(2)}
                </span>
              </p>
            </div>
          )}
        </div>

        <div ref={chartRef} id="chart-container">
          {/* The candlestick chart will be rendered here */}
        </div>
        <div ref={volumeChartRef} id="volume-chart-container">
          {/* The volume chart will be rendered here */}
        </div>
      </div>

      <div className="second">
        <p>
          This is the second div. It takes up 20% of the parent div's width.
        </p>
      </div>
      <div className="third">
        <p>
          This is the third div. It also takes up 20% of the parent div's width.
        </p>
      </div>
    </div>
  );
};

export default Trading;
