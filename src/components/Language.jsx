import UpdateButton from "./UpdateButton";
import L1 from "../public/htmllogo.png";
import Image from "next/image";

export default function Language({
  rank,
  setRank,
  percentile,
  setPercentile,
  currentScore,
  setCurrentScore,
}) {
  return (
    <div className=" sm:ml-4 sm:mt-8">
      <div className="border-2 border-gray-200 p-2 rounded-md  max-w-xs lg:ml-6 lg:max-w-[45rem] lg:p-8 ml-5 mt-4 sm:p-4 ">
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex-shrink-0">
            <Image src={L1} alt="HTML" width={50} height={50} />
          </div>

          <div className="mt-1 sm:mt-0 sm:ml-2 flex-1 lg:w-[40rem]">
            <div className="text-xl font-bold">Hyper Text Markup Language</div>
            <div className="flex flex-col sm:flex-row text-md font-semibold text-gray-700 mt-1 ">
              <div className="mb-1 sm:mb-0 sm:mr-2">Questions: 08</div>
              <div className="mb-1 sm:mb-0 sm:mr-2">Duration: 15 mins</div>
              <div>Submitted on 5th June 2021</div>
            </div>
          </div>

          <div className="mt-2 sm:mt-0 sm:ml-2">
            <UpdateButton
              rank={rank}
              setRank={setRank}
              percentile={percentile}
              setPercentile={setPercentile}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
