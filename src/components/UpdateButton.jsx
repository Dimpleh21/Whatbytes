"use client";
import React, { useState } from "react";
import L6 from "../public/htmllogo.png";
import Image from "next/image";

export default function UpdateButton({
  rank,
  setRank,
  percentile,
  setPercentile,
  currentScore,
  setCurrentScore,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [rank1, setRank1] = useState(0);
  const [percentile1, setPercentile1] = useState(0);
  const [currentScore1, setCurrentScore1] = useState(0);

  const [rankError, setRankError] = useState("");
  const [percentileError, setPercentileError] = useState("");
  const [scoreError, setScoreError] = useState("");

  function HandleClick() {
    setIsFormOpen(!isFormOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    // Validate Rank
    if (!rank1 || isNaN(rank1)) {
      setRankError("Required | Should be a number");
      isValid = false;
    } else {
      setRankError("");
    }

    // Validate Percentile
    if (!percentile1 || percentile1 < 1 || percentile1 > 100) {
      setPercentileError("Required | Should be between 1 and 100");
      isValid = false;
    } else {
      setPercentileError("");
    }

    // Validate Current Score
    if (!currentScore1 || isNaN(currentScore1)) {
      setScoreError("Required | Should be a number");
      isValid = false;
    } else {
      setScoreError("");
    }

    // If all fields are valid, update state and close form
    if (isValid) {
      setRank(rank1);
      setPercentile(percentile1);
      setCurrentScore(currentScore1);
      setIsFormOpen(false);
    }
  }

  return (
    <>
      <button
        className="bg-blue-950 hover:bg-blue-800 text-white py-3 px-10 border-2 rounded-xl"
        onClick={HandleClick}
      >
        Update
      </button>
      {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-sm sm:max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <h2 className="text-2xl font-bold mb-4 sm:mb-0">Update Scores</h2>
              <div className="mt-4 sm:mt-0 sm:ml-auto">
                <Image src={L6} width={40} height={40} alt="Logo" />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Rank Input */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-blue-950 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
                    1
                  </div>
                  <label className="text-lg font-semibold">
                    Update your <b>Rank</b>
                  </label>
                </div>
                <input
                  type="number"
                  className="border border-blue-950 rounded-lg p-2 w-full"
                  value={rank1}
                  onChange={(e) => setRank1(parseInt(e.target.value))}
                  placeholder="Rank"
                  required
                />
                {rankError && (
                  <p className="text-red-500 text-sm">{rankError}</p>
                )}
              </div>

              {/* Percentile Input */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-blue-950 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <label className="text-lg font-semibold">
                    Update your <b>Percentile</b>
                  </label>
                </div>
                <input
                  type="number"
                  className="border border-blue-950 rounded-lg p-2 w-full"
                  value={percentile1}
                  onChange={(e) => setPercentile1(parseInt(e.target.value))}
                  placeholder="Percentile"
                  required
                />
                {percentileError && (
                  <p className="text-red-500 text-sm">{percentileError}</p>
                )}
              </div>

              {/* Current Score Input */}
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-blue-950 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold">
                    3
                  </div>
                  <label className="text-lg font-semibold">
                    Update your <b>Current Score (Out of 15)</b>
                  </label>
                </div>
                <input
                  type="number"
                  className="border border-blue-950 rounded-lg p-2 w-full"
                  value={currentScore1}
                  onChange={(e) => setCurrentScore1(parseInt(e.target.value))}
                  placeholder="Current Score"
                  required
                />
                {scoreError && (
                  <p className="text-red-500 text-sm">{scoreError}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  type="button"
                  className="border border-blue-950 text-blue-950 text-lg font-bold py-2 px-4 rounded w-full sm:w-40"
                  onClick={HandleClick}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-950 text-white py-2 px-4 rounded w-full sm:w-40 text-lg font-bold"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
