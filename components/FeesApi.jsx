import React, { useEffect, useState } from "react";
import { FeesApiURL } from "../config/api";

const FeesApi = ({ coin }) => {
  const [feesData, setFeesData] = useState([]);
  if (coin === "binancecoin") {
    coin = "BSC";
  }
  // let total24h;
  let protocols;
  let lowercaseCoin = coin.toLowerCase();
  for (const obj of feesData) {
    if (obj.module === lowercaseCoin) {
      protocols = obj;

      break;
    }
  }

  const convertToBillion = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + " billion";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + " million";
    } else {
      return num.toFixed(2);
    }
  };

  useEffect(() => {
    const fetchHistoricData = async () => {
      try {
        const apiData = FeesApiURL(coin);
        const response = await fetch(apiData);
        const Apidata = await response.json();
        setFeesData(Apidata.protocols || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-w-[45%] flex flex-col text-[20px]  gap-5 p-5 bg-gray-800 text-white rounded-3xl">
      <h1 className="flex  text-center items-center justify-center font-semibold  text-3xl">
        Fees
      </h1>

      <div className="flex flex-col gap-3">
        <div className="flex font-semibold items-center justify-between">
          <p>Fees 24h</p>
          <p>
            {" "}
            ${protocols ? convertToBillion(protocols.total24h) : "loading.."}
          </p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Fees Change 24h</p>
          <p> {protocols ? protocols.change_1d : "loading.."}%</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Fees 7d</p>
          <p>
            {" "}
            ${protocols ? convertToBillion(protocols.total7d) : "loading.."}
          </p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Fees Change 7d</p>
          <p> {protocols ? protocols.change_7d : "loading.."}%</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Fees 30d</p>
          <p>
            {" "}
            ${protocols ? convertToBillion(protocols.total30d) : "loading.."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeesApi;
