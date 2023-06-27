import React, { useEffect, useState } from "react";
import { totalValue } from "../config/api";

const MCapApi = ({ market_data, coin }) => {
  const [Mcap, setMcap] = useState([]);

  const convertToBillion = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + " billion";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + " million";
    } else {
      return num.toString();
    }
  };

  useEffect(() => {
    const fetchHistoricData = async () => {
      try {
        const apiData = totalValue(coin);
        const response = await fetch(apiData);
        const graphData = await response.json();
        setMcap(graphData.market_caps || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(Mcap);
  return (
    <div className="min-w-[40%] flex flex-col text-[20px]  gap-5 p-5 bg-gray-800 text-white rounded-3xl">
      <h1 className="flex  text-center items-center justify-center font-semibold  text-3xl">
        MCap
      </h1>

      <div className="flex flex-col gap-3">
        <div className="flex font-semibold items-center justify-between">
          <p>MCap Change 24h</p>
          <p>
            ${convertToBillion(market_data.market_cap_change_24h)} (
            {market_data.market_cap_change_percentage_24h.toFixed(2)}%)
          </p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Before 7Days</p>
          <p>
            {" "}
            $
            {Mcap.length > 0
              ? convertToBillion(Mcap[Mcap.length - 7][1])
              : "Loading..."}
          </p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Before 1month</p>
          <p>
            {" "}
            $
            {Mcap.length > 0
              ? convertToBillion(Mcap[Mcap.length - 30][1])
              : "Loading..."}
          </p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Before 3month</p>
          <p>
            {" "}
            $
            {Mcap.length > 0
              ? convertToBillion(Mcap[Mcap.length - 90][1])
              : "Loading..."}
          </p>
        </div>
        <div className="flex font-semibold items-center justify-between">
          <p>Before 6month</p>
          <p>
            {" "}
            $
            {Mcap.length > 0
              ? convertToBillion(Mcap[Mcap.length - 180][1])
              : "Loading..."}
          </p>
        </div>
        <div className="flex font-semibold items-center justify-between">
          <p>Before 1year</p>
          <p>
            {" "}
            $
            {Mcap.length > 0
              ? convertToBillion(Mcap[Mcap.length - 365][1])
              : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MCapApi;
