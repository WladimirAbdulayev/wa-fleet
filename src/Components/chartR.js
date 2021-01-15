import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import Stat from "../Data/stat";

import Title from "./title.js";

const data02 = [
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];

export default function Chart() {
  useEffect(() => {
    SetData(Stat());
  }, []);

  const [data, SetData] = useState();

  return (
    <React.Fragment>
      <Title>Crew Composition</Title>
      <ResponsiveContainer>
        <PieChart width={730} height={400}>
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={160}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
