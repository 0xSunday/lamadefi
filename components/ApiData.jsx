import React, { useState, useEffect } from "react";
import axios from "axios";
import PriceApi from "./PriceApi";
import VolumeApi from "./VolumeApi";
import MCapApi from "./MCapApi";

const ApiData = ({ market_data, coin }) => {
  const timestamp = 1687824000000; // The timestamp you want to convert
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString();

  // console.log(formattedDate);
  // market_data.high_24h

  const convertToMillion = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + " M";
    } else {
      return num.toString();
    }
  };

  return (
    <div className="flex flex-col font-semibold gap-8  ">
      <div className="flex font-semibold justify-around items-start  ">
        <PriceApi market_data={market_data} />
        <VolumeApi market_data={market_data} coin={coin} />
      </div>
      <div className="flex font-semibold justify-around items-start">
        {/* <MCapApi /> */}
      </div>
    </div>
  );
};

export default ApiData;
