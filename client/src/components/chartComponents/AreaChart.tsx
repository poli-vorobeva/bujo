import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import * as React from "react";

const rangeData = [
  {
    day: "1",
    time: [-5, 2],
  },
  {
    day: "2",
    time: [6, 0, 24],
  },
  {
    day: "3",
    time: [21, 5],
  },
  {
    day: "40",
    time: [23, 5],
  },
  {
    day: "5",
    time: [21, 5],
  },
  {
    day: "6",
    time: [21, 5],
  },
  {
    day: "7",
    time: [21, 5],
  },
  {
    day: "8",
    time: [21, 8],
  },
  {
    day: "9",
    time: [20, 5],
  },
  {
    day: "10",
    time: [21, 5],
  },
];

const AreaChartComponent = () => {
  return (
    <AreaChart
      width={730}
      height={250}
      data={rangeData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <XAxis dataKey="day" />
      <YAxis />
      <Area dataKey="time" type="monotone" stroke="#8884d8" fill="#8884d8" />
      <Tooltip />
    </AreaChart>
  );
};
export default AreaChartComponent;
