import React, { useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState } from "../config/recoil";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedButton, setSelectedButton] = useState(0);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const [isClicked, setIsClicked] = useRecoilState(modalState);

  const handleButtonClick = (buttonIndex = 0) => {
    setSelectedButton(buttonIndex);
    setIsClicked(true);
    // console.log(isClicked);
  };

  const getButtonColor = (buttonIndex = 0) => {
    return selectedButton === buttonIndex ? "  bg-black" : "";
  };

  return (
    <div className="fixed inset-y-0 z-10 flex flex-col w-60 bg-gray-700 md:w-200">
      <div className="flex-shrink-0 px-4 py-4 bg-gray-900 text-white">
        <h2 className="text-2xl font-semibold">Lama Defi</h2>
      </div>
      <nav className="mt-4 flex-1">
        <ul className="list-reset flex flex-col gap-4">
          <Link href="/bitcoin" className="text-white  ">
            <li
              onClick={() => handleButtonClick(0)}
              className={`px-4 py-2 text-2xl font-bold hover:bg-black rounded-2xl ${getButtonColor(
                0
              )}`}
            >
              Bitcoin
            </li>
          </Link>
          <Link href="/ethereum" className="text-white  ">
            <li
              onClick={() => handleButtonClick(1)}
              className={`px-4 py-2 text-2xl font-bold hover:bg-black rounded-2xl ${getButtonColor(
                1
              )}`}
            >
              Ethereum
            </li>
          </Link>
          <Link href="/bnb" className="text-white  ">
            <li
              onClick={() => handleButtonClick(2)}
              className={`px-4 py-2 text-2xl font-bold hover:bg-black rounded-2xl ${getButtonColor(
                2
              )}`}
            >
              BNB
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
