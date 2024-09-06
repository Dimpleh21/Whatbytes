"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDashboard, AiOutlineFileText } from "react-icons/ai";
import { BsAward } from "react-icons/bs";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(true);

  const handleSetActive = (linkName) => {
    setActive(linkName);
    setIsOpen(false);
  };

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="lg:hidden p-4 fixed top-0 left-0 z-50 text-gray-600 hover:text-gray-800 bg-white border-r border-gray-200"
        onClick={handleToggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <div
        className={`fixed lg:relative lg:w-64 w-full h-screen border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4 pt-6">
          {/* Dashboard */}
          <Link href="/Dashboard">
            <div
              className={`flex items-center p-4 cursor-pointer ${
                active === "Dashboard"
                  ? "bg-blue-50 text-blue-700 rounded-r-full mr-2"
                  : "text-gray-600 hover:bg-gray-100 rounded-r-full mr-2"
              }`}
              onClick={() => handleSetActive("Dashboard")}
            >
              <AiOutlineDashboard className="mr-3" />
              <span className="font-bold text-lg lg:text-xl">Dashboard</span>
            </div>
          </Link>

          <Link href="/Skilltest">
            <div
              className={`flex items-center p-4 cursor-pointer ${
                active === "Skill Test"
                  ? "bg-blue-50 text-blue-700 rounded-r-full mr-2"
                  : "text-gray-600 hover:bg-gray-100 rounded-r-full mr-2"
              }`}
              onClick={() => handleSetActive("Skill Test")}
            >
              <BsAward className="mr-3" />
              <span className="font-bold text-lg lg:text-xl ">Skill Test</span>
            </div>
          </Link>

          {/* Internship */}
          <Link href="/Internship">
            <div
              className={`flex items-center p-4 cursor-pointer ${
                active === "Internship"
                  ? "bg-blue-50 text-blue-700 rounded-r-full mr-2"
                  : "text-gray-600 hover:bg-gray-100 rounded-r-full mr-2"
              }`}
              onClick={() => handleSetActive("Internship")}
            >
              <AiOutlineFileText className="mr-3" />
              <span className="font-bold text-lg lg:text-xl">Internship</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
