import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
// import Title from "./title.js";

export default function Chart({ data }) {
  // useEffect(() => {
  //   SetData(Stat());
  // }, []);

  // const [data, SetData] = useState();

  console.log("CHART: I have this data: ", data);

  return (
    <React.Fragment>
      {/* <Title>Crew Composition</Title> */}
      <ResponsiveContainer>
        <PieChart width={900} height={600}>
          <Pie
            data={data}
            dataKey="amt"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            opacity="0.6"
            fill={data[0].color2}
            label
          />
          <Pie
            data={data}
            dataKey="uv"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={140}
            outerRadius={180}
            fill={data[0].color1}
            opacity="0.5"
          />
          <Pie
            data={data}
            dataKey="pv"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={180}
            outerRadius={230}
            fill={data[0].color2}
            opacity="0.4"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
