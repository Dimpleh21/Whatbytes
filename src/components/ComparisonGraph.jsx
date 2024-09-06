"use client";
import Chart from "./Chart";

export default function ComparisonGraph({ rank, percentile, currentScore }) {
  const graphData = [
    { percentile: 0, numberOfStudents: 1 },
    { percentile: 10, numberOfStudents: 2 },
    { percentile: 25, numberOfStudents: 3 },
    { percentile: 30, numberOfStudents: 5 },
    { percentile: 40, numberOfStudents: 8 },
    { percentile: 50, numberOfStudents: 12 },
    { percentile: 60, numberOfStudents: 10 },
    { percentile: 65, numberOfStudents: 8 },
    { percentile: 75, numberOfStudents: 6 },
    { percentile: 95, numberOfStudents: 7 },
    { percentile: 55, numberOfStudents: 4 },
    { percentile: 90, numberOfStudents: 4 },
    { percentile: 100, numberOfStudents: 1 },
  ];

  const averagePercentile = 72;
  const userPercentile = percentile; // Dynamic value passed from parent
  const userScore = currentScore; // Current score passed from parent

  return (
    <div className="border-2 border-gray-200 p-2 rounded-md w-full max-w-xs lg:ml-10 lg:max-w-[45rem] lg:p-8 ml-5 mt-4 sm:p-4">
      <div className="text-xl font-bold">Comparison Graph</div>

      <div className="text-base sm:text-lg md:text-xl font-bold text-gray-600 p-4 ">
        You scored {userPercentile}% percentile{" "}
        <span className="font-semibold">
          with a current score of {userScore}/15, which is lower than the
          average percentile {averagePercentile}% of all the engineers who took
          this assessment.
        </span>
      </div>

      {/* Pass the updated percentile and data to the Chart component */}

      <Chart data={graphData} userPercentile={userPercentile} />
    </div>
  );
}
