import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function Chart({ data, userPercentile }) {
  const [animatedData, setAnimatedData] = useState(data);
  const axisData = [0, 25, 50, 75, 100];

  // Update the chart when the data or userPercentile changes

  return (
    <div className="ml-8 mt-4">
      <ResponsiveContainer width="90%" height={500}>
        <LineChart data={animatedData}>
          {/* X-axis for percentile values */}
          <XAxis
            dataKey="percentile" // Use "percentile" as the key for X-axis
            label={{
              value: "Percentile",
              position: "insideBottom",
              offset: -3,
            }}
            ticks={axisData} // Set X-axis ticks
          />

          {/* Tooltip for displaying data */}
          <Tooltip />

          {/* Plotting the line with animation and dots for each point */}
          <Line
            type="monotone"
            dataKey="numberOfStudents" // Use "numberOfStudents" as the key for Y-axis
            stroke="#8884d8"
            isAnimationActive={true} // Enable animation
            animationDuration={1500} // Set animation duration (1.5s)
            animationEasing="ease" // Easing function
            dot={{ stroke: "#8884d8", strokeWidth: 2, r: 4 }} // Customizing dots with size and color
            activeDot={{ stroke: "#000000", strokeWidth: 3, r: 6 }} // Active dot styling
          />

          {/* Add a reference line for the user's percentile */}
          <ReferenceLine
            x={userPercentile}
            stroke="gray"
            label="Your Percentile"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
