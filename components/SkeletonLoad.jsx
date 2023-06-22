import React from "react";

const SkeletonLoad = () => {
  return (
    <div class=" flex p-6  flex-col gap-16 animate-pulse space-y-5 rounded-2xl bg-gray-900">
      <div className="flex flex-row gap-2 items-center ">
        <div className="rounded-full h-16 w-16 bg-gray-600" />
        <div className="bg-gray-600 h-12 w-52 rounded-2xl "></div>
      </div>

      <div class="flex flex-wrap flex-row justify-around gap-4  ">
        <div class="h-20 w-48 rounded-3xl bg-gray-600"></div>
        <div class="h-20 w-48 rounded-3xl bg-gray-600"></div>
        <div class="h-20 w-48 rounded-3xl bg-gray-600"></div>
        <div class="h-20 w-48 rounded-3xl bg-gray-600"></div>
      </div>
      <div className="flex flex-col gap-8">
        <div class="h-96 mx-9 rounded-3xl bg-gray-600"></div>
        <div class="flex flex-wrap flex-row justify-around gap-4 mx-10 ">
          <div class="h-16 w-32 rounded-3xl bg-gray-600"></div>
          <div class="h-16 w-32 rounded-3xl bg-gray-600"></div>
          <div class="h-16 w-32 rounded-3xl bg-gray-600"></div>
          <div class="h-16 w-32 rounded-3xl bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoad;
