import React, { useState, useEffect } from "react";
import axios from "axios";
import PriceApi from "./PriceApi";
import VolumeApi from "./VolumeApi";
import MCapApi from "./MCapApi";
import FeesApi from "./FeesApi";
import RevenueApi from "./RevenueApi";
import TvlApi from "./TvlApi";

const ApiData = ({ market_data, coin }) => {
  return (
    <div className="flex flex-col font-semibold gap-8  ">
      <div className="flex font-semibold justify-around items-start  ">
        <PriceApi market_data={market_data} />
        <VolumeApi market_data={market_data} coin={coin} />
      </div>
      <div className="flex font-semibold justify-around items-start">
        <MCapApi market_data={market_data} coin={coin} />
        <TvlApi coin={coin} />
      </div>
      <div className="flex font-semibold justify-around items-start">
        <FeesApi coin={coin} />
        <RevenueApi coin={coin} />
      </div>
    </div>
  );
};

export default ApiData;
