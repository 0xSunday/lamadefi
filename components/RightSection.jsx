import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import ApiData from "./ApiData";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/recoil";
import SkeletonLoad from "./SkeletonLoad";

const RightSection = ({ data }) => {
  const [activeComponent, setActiveComponent] = useState("apiData");
  const [isClicked, setIsClicked] = useRecoilState(modalState);
  const convertToBillion = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + " B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + " M";
    } else {
      return num.toString();
    }
  };

  useEffect(() => {
    data && setIsClicked(false);
  }, []);

  const style = "bg-white text-black";
  const getButtonColor = (buttonIndex) => {
    return activeComponent === buttonIndex ? style : "";
  };

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  {
    return !isClicked ? (
      <div className="flex  flex-col gap-16 ">
        <div className="flex flex-row gap-2 items-center">
          <img alt={data.id} src={data.image.small} />
          <h1 className="text-4xl font-bold capitalize">{data.name}</h1>
        </div>

        <div className="flex flex-wrap flex-row justify-around gap-4 ">
          <div className="px-5 py-3 bg-pink-300 min-w-[170px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
            <p>Price</p>
            <p>${data.market_data.current_price.usd}</p>
          </div>
          <div className="px-5 py-3 bg-yellow-200 min-w-[170px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
            <p>MCap</p>
            <p>${convertToBillion(data.market_data.market_cap.usd)}</p>
          </div>
          <div className="px-5 py-3 bg-blue-300 min-w-[170px]  text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
            <p>Total Supply</p>
            <p>{convertToBillion(data.market_data.total_supply)}</p>
          </div>
          <div className="px-5 py-3 bg-red-300 min-w-[170px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
            <p>Max Supply</p>
            {data.market_data.max_supply ? (
              <p>{convertToBillion(data.market_data.max_supply)}</p>
            ) : (
              <p>∞</p>
            )}
          </div>

          <div className="px-5 py-3 bg-green-300 min-w-[170px] text-[19px] text-black font-bold flex flex-col rounded-3xl justify-center items-center">
            <p>Circulating Supply</p>
            <p>{convertToBillion(data.market_data.circulating_supply)}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-around py-8 pb-10 font-bold text-[20px]">
            <button
              className={`border-2 font-bold border-white rounded-lg p-4 px-6  ${getButtonColor(
                "apiData"
              )} hover:bg-white hover:text-black `}
              onClick={() => handleButtonClick("apiData")}
            >
              Show Data
            </button>
            <button
              className={`border-2 font-bold border-white rounded-lg p-4 px-6  ${getButtonColor(
                "graph"
              )} hover:bg-white hover:text-black `}
              onClick={() => handleButtonClick("graph")}
            >
              Show Graph
            </button>
          </div>
          <div>
            {activeComponent === "apiData" && (
              <ApiData market_data={data.market_data} coin={data.id} />
            )}
            {activeComponent === "graph" && <Graph coin={data.id} />}
          </div>
        </div>
      </div>
    ) : (
      <SkeletonLoad />
    );
  }
};

export default RightSection;
