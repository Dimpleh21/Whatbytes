import Image from "next/image";
import L2 from "../public/trophy.svg";
import L3 from "../public/clipboard.svg";
import L4 from "../public/checkbox.svg";

export default function Statistics({ rank, percentile, currentScore }) {
  return (
    <div className="border-2 border-gray-200 p-2 rounded-md w-full max-w-xs lg:ml-10 lg:max-w-[45rem] lg:p-8 ml-5 mt-4 sm:p-4  ">
      <div className="text-xl font-bold">Quick Statistics</div>
      <div className="flex flex-col sm:flex-row gap-12 lg:gap-20 mt-4">
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-slate-200 flex justify-center items-center border border-gray-300">
            <Image src={L2} alt="Rank Icon" width={16} height={16} />
          </div>
          <div className="ml-2 sm:ml-3">
            <div className="text-sm sm:text-base md:text-lg font-semibold">
              {rank}
            </div>
            <div className="text-xs sm:text-sm md:text-md text-gray-500 font-medium">
              RANK
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-slate-200 flex justify-center items-center border border-gray-300">
            <Image src={L3} alt="Percentile Icon" width={16} height={16} />
          </div>
          <div className="ml-2 sm:ml-3">
            <div className="text-sm sm:text-base md:text-lg font-semibold">
              {percentile}%
            </div>
            <div className="text-xs sm:text-sm md:text-md text-gray-500 font-medium">
              PERCENTILE
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full h-8 w-8 sm:h-10 sm:w-10 bg-slate-200 flex justify-center items-center border border-gray-300">
            <Image src={L4} alt="Current Score Icon" width={16} height={16} />
          </div>
          <div className="ml-2 sm:ml-3">
            <div className="text-sm sm:text-base md:text-lg font-semibold">
              {currentScore}
            </div>
            <div className="text-xs sm:text-sm md:text-md text-gray-500 font-medium">
              CURRENT SCORE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
