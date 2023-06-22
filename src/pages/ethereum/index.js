import RightSection from "../../../components/RightSection";
import { SingleCoin } from "../../../config/api";

import React from "react";

const index = ({ apiData }) => {
  // const apiData = SingleCoin("ethereum");
  // const response = await fetch(apiData, {
  //   next: {
  //     revalidate: 1,
  //   },
  // });
  // const data = await response.json();

  // console.log(data.market_data.current_price.usd);
  return (
    <div className="ml-72 mt-5 mr-3 bg-black pt-5 px-5 pb-2 rounded-lg">
      <RightSection data={apiData} />
      {/* <h1>hello sunil</h1> */}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from API
  const apiDataresponse = SingleCoin("ethereum");

  const response = await fetch(apiDataresponse);
  const data = await response.json();

  // Pass the fetched data as props
  return {
    props: {
      apiData: data,
    },
  };
}

export default index;
