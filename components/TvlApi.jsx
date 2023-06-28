import React, { useEffect, useState } from "react";
import { TVLApiURL } from "../config/api";

const TvlApi = ({ coin }) => {
  const [TvlData, setTvlData] = useState([]);
  if (coin === "binancecoin") {
    coin = "BSC";
  }
  // const timestamp = 1687824000;
  // const date = new Date(timestamp * 1000);

  // // Extracting date components
  // const year = date.getFullYear();
  // const month = date.getMonth() + 1; // Adding 1 since months are zero-based
  // const day = date.getDate();

  // // Formatting the date
  // const formattedDate = `${day < 10 ? "0" : ""}${day}-${month}- ${year}-${
  //   month < 10 ? "0" : ""
  // }`;

  // console.log(formattedDate);

  const convertToBillion = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + " billion";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + " million";
    } else {
      return (num ?? 0).toFixed(2);
    }
  };

  useEffect(() => {
    const fetchHistoricData = async () => {
      try {
        const apiData = TVLApiURL(coin);
        const response = await fetch(apiData);
        const Apidata = await response.json();
        setTvlData(Apidata);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(TvlData.length);

  let d7 = 0,
    d30 = 0,
    m3 = 0,
    m6 = 0,
    y1 = 0,
    y2 = 0;

  const startIdxd7 = TvlData.length - 7;
  for (let i = startIdxd7; i < TvlData.length; i++) {
    if (TvlData[i] && TvlData[i].tvl) {
      d7 += TvlData[i].tvl;
    }
  }

  const startIdxd30 = TvlData.length - 30;
  for (let i = startIdxd30; i < TvlData.length; i++) {
    if (TvlData[i] && TvlData[i].tvl) {
      d30 += TvlData[i].tvl;
    }
  }

  const startIdx3m = TvlData.length - 90;
  for (let i = startIdx3m; i < TvlData.length; i++) {
    if (TvlData[i] && TvlData[i].tvl) {
      m3 += TvlData[i].tvl;
    }
  }
  const startIdxm6 = TvlData.length - 180;
  for (let i = startIdxm6; i < TvlData.length; i++) {
    if (TvlData[i] && TvlData[i].tvl) {
      m6 += TvlData[i].tvl;
    }
  }
  const startIdxy1 = TvlData.length - 365;
  for (let i = startIdxy1; i < TvlData.length; i++) {
    if (TvlData[i] && TvlData[i].tvl) {
      y1 += TvlData[i].tvl;
    }
  }
  const startIdxy2 = TvlData.length - 730;
  for (let i = startIdxy2; i < TvlData.length; i++) {
    if (TvlData[i] && TvlData[i].tvl) {
      y2 += TvlData[i].tvl;
    }
  }

  return (
    <div className="min-w-[45%] flex flex-col text-[20px]  gap-5 p-5 bg-gray-800 text-white rounded-3xl">
      <h1 className="flex  text-center items-center justify-center font-semibold  text-3xl">
        TVL
      </h1>

      <div className="flex flex-col gap-3">
        <div className="flex font-semibold items-center justify-between">
          <p>Tvl 24h</p>
          <p>
            {" "}
            $
            {TvlData.length > 0
              ? convertToBillion(TvlData[TvlData.length - 1].tvl)
              : "Loading..."}
          </p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 7days</p>
          <p> ${TvlData.length > 0 ? convertToBillion(d7) : "Loading..."}</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 1month</p>
          <p> ${TvlData.length > 0 ? convertToBillion(d30) : "Loading..."}</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 3months</p>
          <p>
            {" "}
            ${TvlData.length > 0 ? convertToBillion(m3) : "Loading..."}
          </p>{" "}
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 6months</p>
          <p>
            {" "}
            ${TvlData.length > 0 ? convertToBillion(m6) : "Loading..."}
          </p>{" "}
        </div>
        <div className="flex font-semibold items-center justify-between">
          <p>Last 1year</p>
          <p>
            {" "}
            ${TvlData.length > 0 ? convertToBillion(y1) : "Loading..."}
          </p>{" "}
        </div>
        <div className="flex font-semibold items-center justify-between">
          <p>Last 2years</p>
          <p>
            {" "}
            ${TvlData.length > 0 ? convertToBillion(y2) : "Loading..."}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default TvlApi;
