export default function Navbar() {
  return (
    <div>
      <div className="shadow-md h-16 flex items-center px-4 sm:px-6">
        {/* Brand Section */}
        <div className="flex flex-col justify-center h-full font-bold text-xl sm:text-lg md:text-xl ml-12">
          WhatBytes
        </div>

        {/* Profile Section for larger screens */}
        <div className="hidden md:flex items-center border-2 p-2 h-10 max-w-xs rounded-lg bg-white space-x-2 ml-auto">
          <div className="rounded-full h-8 w-8 bg-slate-200 flex justify-center items-center">
            <div className="text-sm font-bold">U</div>
          </div>
          <div className="flex flex-col text-center text-sm font-semibold">
            Rahil Siddique
          </div>
        </div>

        {/* Profile Icon only for mobile */}
        <div className="flex md:hidden items-center ml-auto">
          <div className="rounded-full h-8 w-8 bg-slate-200 flex justify-center items-center">
            <div className="text-sm font-bold">U</div>
          </div>
        </div>
      </div>
    </div>
  );
}
