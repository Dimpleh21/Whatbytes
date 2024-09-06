import CircularProgress from "./CircularProgress";

export default function Question({ rank, percentile, currentScore }) {
  return (
    <div className="ml-4 sm:ml-6 lg:ml-2 border-2 border-gray-200 mt-6 p-4 sm:p-6 lg:p-8 w-full max-w-sm  lg:max-w-[32rem] rounded-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="text-xl sm:text-2xl font-medium">Question Analysis</div>
        <div className="text-lg sm:text-xl font-bold text-blue-700 mt-2 sm:mt-0">
          {currentScore}/15
        </div>
      </div>

      <div className="text-gray-500 text-lg sm:text-xl font-bold mt-4">
        You scored {currentScore} questions correct out of 15.
        <span className="text-gray-500 text-lg sm:text-xl font-semibold">
          However, it still needs some improvements.
        </span>
      </div>
      <div className="">
        <CircularProgress
          completedQuestions={currentScore}
          totalQuestions={15}
        />
      </div>
    </div>
  );
}
