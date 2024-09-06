"use client";
import Language from "../../components/Language";
import Statistics from "../../components/Statistics";
import ComparisonGraph from "../../components/ComparisonGraph";
import Syllabus from "../../components/Syllabus";
import Question from "../../components/Question";
import { useState } from "react";

export default function Skilltest() {
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  return (
    <>
      <div className="ml-4 mt-6 sm:ml-10 sm:mt-10 text-xl sm:text-2xl text-gray-500 font-medium">
        Skill Test
      </div>
      <div className="flex flex-col sm:flex-row  sm:gap-8 mt-4">
        <div className="flex-1">
          <Language
            rank={rank}
            setRank={setRank}
            percentile={percentile}
            setPercentile={setPercentile}
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
          />
          <Statistics
            rank={rank}
            percentile={percentile}
            currentScore={currentScore}
          />
          <ComparisonGraph
            rank={rank}
            percentile={percentile}
            currentScore={currentScore}
          />
        </div>
        <div className="flex-1 mt-4 sm:mt-0">
          <Syllabus />
          <Question
            rank={rank}
            percentile={percentile}
            currentScore={currentScore}
          />
        </div>
      </div>
    </>
  );
}
