"use client";
import { useState, useEffect } from "react";
import L5 from "../public/target.svg";
import Image from "next/image";
export default function CircularProgressBar({
  totalQuestions,
  completedQuestions,
}) {
  const radius = 160;
  const stroke = 40;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = (completedQuestions / totalQuestions) * 100;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#d3d3d3"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#3b82f6"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          //   strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-stroke duration-300"
        />
      </svg>
      <div className="absolute text-center text-lg font-bold text-blue-500">
        <Image src={L5} width={70} />
      </div>
    </div>
  );
}
