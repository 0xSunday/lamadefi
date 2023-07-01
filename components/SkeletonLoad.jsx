import React from "react";

const SkeletonLoad = () => {
  return (
    <div class=" flex p-6  flex-col gap-10 animate-pulse space-y-5 rounded-2xl bg-black">
      <div className="flex flex-row gap-2 items-center ">
        <div className="rounded-full h-16 w-16 bg-gray-600" />
        <div className="bg-gray-600 h-12 w-52 rounded-2xl "></div>
      </div>

      <div class="flex flex-wrap flex-row justify-around gap-4  ">
        <div class="h-20 w-40 rounded-3xl bg-gray-600"></div>
        <div class="h-20 w-40 rounded-3xl bg-gray-600"></div>
        <div class="h-20 w-40 rounded-3xl bg-gray-600"></div>
        <div class="h-20 w-40 rounded-3xl bg-gray-600"></div>
        <div class="h-20 w-40 rounded-3xl bg-gray-600"></div>
      </div>
      <div className="flex flex-col gap-8">
        <div class="flex flex-wrap flex-row justify-around gap-4 mx-10 ">
          <div class="h-20 w-44 rounded-3xl bg-gray-600"></div>
          <div class="h-20 w-44 rounded-3xl bg-gray-600"></div>
        </div>
        <div className="flex items-center gap-7 justify-around">
          <div class="h-80  w-[30rem]   rounded-3xl bg-gray-600"></div>
          <div class="h-80  w-[30rem]   rounded-3xl bg-gray-600"></div>
        </div>
        <div className="flex items-center gap-7 justify-around">
          <div class="h-80  w-[30rem]   rounded-3xl bg-gray-600"></div>
          <div class="h-80  w-[30rem]   rounded-3xl bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoad;
