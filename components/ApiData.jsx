import { data } from "autoprefixer";
import React from "react";

const ApiData = (props) => {
  const { id, market_data } = props.data;
  return (
    <div className="flex flex-col px-3">
      <div className="text-[20px]">
        <div className="flex items-center justify-between">
          <p>TVL</p>
          <p>${market_data.total_volume.usd}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>MCap</p>
          <p>${market_data.market_cap.usd}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Highest Price</p>
          <p>${market_data.market_cap.usd}</p>
        </div>

        <div className="flex items-center justify-between">
          <p>Lowest Price</p>
          <p>${market_data.market_cap.usd}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ApiData;
