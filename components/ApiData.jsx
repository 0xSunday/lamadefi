import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { totalValue } from "../config/api";

const ApiData = ({ coin }) => {
  const [valueData, setValueData] = useState();
  const fetchValueData = async () => {
    // const apiData = totalValue(coin, "0");
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=daily&precision=2"
    );
    const graphData = await response.json();
    setValueData(graphData);
  };

  console.log(valueData);

  // useEffect(() => {
  //   fetchHistoricData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [days]);

  return <h1>{coin}</h1>;
};

export default ApiData;
