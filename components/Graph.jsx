import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { HistoricalChart } from "../config/api";
import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";

const Graph = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [historicMcap, sethistoricMcap] = useState();
  const [historicTvl, sethistoricTvl] = useState();

  const [graphData, setGraphData] = useState();
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);

  const [selectedButton, setSelectedButton] = useState(0);

  const fetchHistoricData = async () => {
    const apiData = HistoricalChart(coin, days);
    const response = await fetch(apiData);
    const graphData = await response.json();
    setflag(true);
    setHistoricData(graphData.prices);
    sethistoricMcap(graphData.market_caps);
    sethistoricTvl(graphData.total_volumes);
  };

  // console.log(graphData);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historicData, historicMcap, historicTvl, days]);

  const handleButtonClick = (buttonIndex, valueD) => {
    setSelectedButton(buttonIndex);
    setGraphData(valueD);
  };
  const style = "bg-yellow-400 text-black";
  const getButtonColor = (buttonIndex) => {
    return selectedButton === buttonIndex ? style : "";
  };

  const selectedData = (buttonIndex = 0) => {
    return selectedButton === buttonIndex;
  };

  return (
    <div className="flex justify-center items-center">
      {!historicData | (flag === false) | !historicMcap | !historicTvl ? (
        <div
          role="status"
          className="flex h-full justify-center items-center w-full"
        >
          <svg
            aria-hidden="true"
            className=" w-40 h-40 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="graphmain flex flex-col  gap-6">
          <div className="flex gap-40">
            <div
              onClick={() => handleButtonClick(0, historicData)}
              className={`border-2 border-yellow-400 rounded-lg p-4 px-6  ${getButtonColor(
                0
              )} hover:bg-yellow-400 hover:text-black `}
            >
              Price
            </div>

            <div
              onClick={() => handleButtonClick(1, historicMcap)}
              className={`border-2 border-yellow-400 rounded-lg p-4 px-6  ${getButtonColor(
                1
              )} hover:bg-yellow-400 hover:text-black `}
            >
              MCap
            </div>

            <div
              onClick={() => handleButtonClick(2, historicTvl)}
              className={`border-2 border-yellow-400 rounded-lg p-4 px-6  ${getButtonColor(
                2
              )} hover:bg-yellow-400 hover:text-black `}
            >
              TVL
            </div>
          </div>
          <div className="graphstyles">
            {selectedData(0) && (
              <Line
                data={{
                  labels: historicData?.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                  }),

                  datasets: [
                    {
                      data: historicData?.map((coin) => coin[1]),
                      label: `Price ( Past ${days} Days )`,
                      borderColor: "#EEBC1D",
                      hoverBorderJoinStyle: "round",
                      pointBackgroundColor: "rgba(0,0,255,1)",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                  plugins: {
                    zoom: {
                      zoom: {
                        wheel: {
                          enabled: true,
                        },
                        pinch: {
                          enabled: true,
                        },
                        mode: "xy",
                      },
                    },
                  },
                }}
              />
            )}
            {selectedData(1) && (
              <Line
                data={{
                  labels: historicMcap?.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                  }),

                  datasets: [
                    {
                      data: historicMcap?.map((coin) => coin[1]),
                      label: `MCap ( Past ${days} Days )`,
                      borderColor: "#EEBC1D",
                      hoverBorderJoinStyle: "round",
                      pointBackgroundColor: "rgba(0,0,255,1)",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                  plugins: {
                    zoom: {
                      zoom: {
                        wheel: {
                          enabled: true,
                        },
                        pinch: {
                          enabled: true,
                        },
                        mode: "xy",
                      },
                    },
                  },
                }}
              />
            )}

            {selectedData(2) && (
              <Line
                data={{
                  labels: historicTvl?.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                  }),

                  datasets: [
                    {
                      data: historicTvl?.map((coin) => coin[1]),
                      label: `MCap ( Past ${days} Days )`,
                      borderColor: "#EEBC1D",
                      hoverBorderJoinStyle: "round",
                      pointBackgroundColor: "rgba(0,0,255,1)",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                  plugins: {
                    zoom: {
                      zoom: {
                        wheel: {
                          enabled: true,
                        },
                        pinch: {
                          enabled: true,
                        },
                        mode: "xy",
                      },
                    },
                  },
                }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Graph;
