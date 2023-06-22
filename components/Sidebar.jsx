import React, { useState } from "react";
import Link from "next/link";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="fixed inset-y-0 z-10 flex flex-col w-64 bg-gray-700 md:w-200">
      <div className="flex-shrink-0 px-4 py-4 bg-gray-900 text-white">
        <h2 className="text-2xl font-semibold">Lama Defi</h2>
      </div>
      <nav className="mt-4 flex-1">
        <ul className="list-reset">
          <li className="px-4 py-2">
            <Link href="/bitcoin" className="text-gray-300 hover:text-white">
              Bitcoin
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link href="/ethereum" className="text-gray-300 hover:text-white">
              Ethereum
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link href="/bnb" className="text-gray-300 hover:text-white">
              BNB
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
