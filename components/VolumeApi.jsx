import { useEffect, useState } from "react";
import { totalValue } from "../config/api";

const VolumeApi = ({ market_data, coin }) => {
  const [volume, setVolume] = useState([]);

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
        setVolume(graphData.total_volumes || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let d7 = 0,
    d30 = 0,
    m3 = 0,
    m6 = 0,
    y1 = 0;

  const startIdxd7 = volume.length - 7;
  for (let i = startIdxd7; i < volume.length; i++) {
    if (volume[i] && volume[i][1]) {
      d7 += volume[i][1];
    }
  }

  const startIdxd30 = volume.length - 30;
  for (let i = startIdxd30; i < volume.length; i++) {
    if (volume[i] && volume[i][1]) {
      d30 += volume[i][1];
    }
  }

  const startIdx3m = volume.length - 90;
  for (let i = startIdx3m; i < volume.length; i++) {
    if (volume[i] && volume[i][1]) {
      m3 += volume[i][1];
    }
  }
  const startIdxm6 = volume.length - 180;
  for (let i = startIdxm6; i < volume.length; i++) {
    if (volume[i] && volume[i][1]) {
      m6 += volume[i][1];
    }
  }
  const startIdxy1 = volume.length - 365;
  for (let i = startIdxy1; i < volume.length; i++) {
    if (volume[i] && volume[i][1]) {
      y1 += volume[i][1];
    }
  }

  return (
    <div className="min-w-[40%] flex flex-col text-[20px]  gap-5 p-5 bg-gray-800 text-white rounded-3xl">
      <h1 className="flex  text-center items-center justify-center font-semibold  text-3xl">
        Volume
      </h1>

      <div className="flex flex-col gap-3">
        <div className="flex font-semibold items-center justify-between">
          <p>Volume 24h</p>
          <p> ${convertToBillion(market_data.total_volume.usd)}</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 7days</p>
          <p> ${convertToBillion(d7)}</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 1month</p>
          <p> ${convertToBillion(d30)}</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 3months</p>
          <p> ${convertToBillion(m3)}</p>
        </div>

        <div className="flex font-semibold items-center justify-between">
          <p>Last 6months</p>
          <p> ${convertToBillion(m6)}</p>
        </div>
        <div className="flex font-semibold items-center justify-between">
          <p>Last 1year</p>
          <p> ${convertToBillion(y1)}</p>
        </div>
      </div>
    </div>
  );
};

export default VolumeApi;
