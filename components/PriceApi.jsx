import React from "react";

const PriceApi = ({ market_data }) => {
  return (
    <div className="min-w-[40%] flex flex-col text-[20px]  gap-5 p-5 bg-gray-800 text-white rounded-3xl">
      <h1 className="flex  text-center items-center justify-center font-semibold  text-3xl">
        Price
      </h1>

      <div className="flex flex-col gap-3">
        <div className="flex font-semibold  items-center justify-between">
          <p>24h high</p>
          <p>${market_data.high_24h.usd}</p>
        </div>

        <div className="flex font-semibold  items-center justify-between">
          <p>24h Low</p>
          <p>${market_data.low_24h.usd}</p>
        </div>
        <div className="flex font-semibold  items-center justify-between">
          <p>Price Change 24H </p>
          <p>
            {(
              (market_data.current_price.usd *
                market_data.price_change_percentage_24h) /
              100
            ).toFixed(1)}
            $ ( {market_data.price_change_percentage_24h.toFixed(2)}%)
          </p>
        </div>

        <div className="flex font-semibold  items-center justify-between">
          <p>Price Change 7days </p>
          <p>
            {(
              (market_data.current_price.usd *
                market_data.price_change_percentage_7d) /
              100
            ).toFixed(1)}
            $ ( {market_data.price_change_percentage_7d.toFixed(2)}%)
          </p>
        </div>
        <div className="flex font-semibold  items-center justify-between">
          <p>Price Change 30days </p>
          <p>
            {(
              (market_data.current_price.usd *
                market_data.price_change_percentage_30d) /
              100
            ).toFixed(1)}
            $ ( {market_data.price_change_percentage_30d.toFixed(2)}%)
          </p>
        </div>
        <div className="flex font-semibold  items-center justify-between">
          <p>Price Change 1year </p>
          <p>
            {(
              (market_data.current_price.usd *
                market_data.price_change_percentage_1y) /
              100
            ).toFixed(1)}
            $ ( {market_data.price_change_percentage_1y.toFixed(2)}%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceApi;
