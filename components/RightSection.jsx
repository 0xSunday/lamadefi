import React from "react";
import Graph from "./Graph";

const RightSection = ({ data }) => {
  return (
    <div className="flex  flex-col gap-16 ">
      <div className="flex flex-row gap-2 items-center">
        <img alt={data.id} src={data.image.small} />
        <h1 className="text-4xl font-bold capitalize">{data.name}</h1>
      </div>

      <div className="flex flex-wrap flex-row justify-around gap-4 ">
        <div className="px-5 py-3 bg-pink-300 min-w-[200px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Price</p>
          <p>${data.market_data.current_price.usd}</p>
        </div>
        <div className="px-5 py-3 bg-blue-300 min-w-[200px]  text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Total Supply</p>
          <p>{data.market_data.total_supply}</p>
        </div>
        <div className="px-5 py-3 bg-red-300 min-w-[200px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Max Supply</p>
          <p>{data.market_data.max_supply}</p>
        </div>

        <div className="px-5 py-3 bg-green-300 min-w-[200px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
          <p>Circulating Supply</p>
          <p>{data.market_data.circulating_supply}</p>
        </div>
      </div>
      {/* <div className="flex items-center justify-around">
        <ApiData coin={data.id} />
      </div> */}
      <div className="flex justify-center items-center">
        <Graph coin={data.id} />
      </div>
    </div>
  );
};

export default RightSection;
