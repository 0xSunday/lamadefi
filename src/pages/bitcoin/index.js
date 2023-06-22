import React, { useEffect, useState } from "react";
import RightSection from "../../../components/RightSection";
import { SingleCoin } from "../../../config/api";

const index = ({ apiData }) => {
  // const apiData = SingleCoin("bitcoin");
  // const response = await fetch(apiData, {
  //   next: {
  //     revalidate: 2,
  //   },
  // });
  // const data = await response.json();

  // console.log(apiData);
  return (
    <div className="ml-72 mt-5 mr-3 bg-black pt-5 px-5 pb-2 rounded-lg">
      <RightSection data={apiData} />
      {/* <h1>hello sunil</h1> */}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from API
  const apiDataresponse = SingleCoin("bitcoin");

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
