import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
// import Title from "./title.js";

export default function Chart({ data }) {
  // const [chartData, setChartData]=useState({});

  console.log("CHART: I have this data: ", data);

  return (
    <React.Fragment>
      {/* <Title>Absolute Values</Title> */}
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={data[0].color1} stopOpacity={0.8} />
              <stop offset="95%" stopColor={data[0].color1} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={data[0].color2} stopOpacity={0.8} />
              <stop offset="95%" stopColor={data[0].color2} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke={data[0].color1}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke={data[0].color2}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
