import React, { useState } from "react";
import Link from "next/link";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const getButtonColor = (buttonIndex) => {
    return selectedButton === buttonIndex ? "  bg-black" : "";
  };

  return (
    <div className="fixed inset-y-0 z-10 flex flex-col w-64 bg-gray-700 md:w-200">
      <div className="flex-shrink-0 px-4 py-4 bg-gray-900 text-white">
        <h2 className="text-2xl font-semibold">Lama Defi</h2>
      </div>
      <nav className="mt-4 flex-1">
        <ul className="list-reset flex flex-col gap-4">
          <li
            onClick={() => handleButtonClick(0)}
            className={`px-4 py-2 text-2xl font-bold hover:bg-yellow-300 ${getButtonColor(
              0
            )}`}
          >
            <Link href="/bitcoin" className="text-gray-300 hover:text-black ">
              Bitcoin
            </Link>
          </li>
          <li
            onClick={() => handleButtonClick(1)}
            className={`px-4 py-2 text-2xl font-bold hover:bg-yellow-300 ${getButtonColor(
              1
            )}`}
          >
            <Link href="/ethereum" className="text-gray-300 hover:text-black ">
              Ethereum
            </Link>
          </li>
          <li
            onClick={() => handleButtonClick(2)}
            className={`px-4 py-2 text-2xl font-bold hover:bg-yellow-300 ${getButtonColor(
              2
            )}`}
          >
            <Link href="/bnb" className="text-gray-300 hover:text-black ">
              BNB
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
