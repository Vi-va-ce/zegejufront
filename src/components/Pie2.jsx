import React from "react";
import { Chart } from "react-google-charts";


const options = {
  title: "Total answer assesment",
  pieHole: 0.6,
  is3D: false,
};


function Pie2({ data }) {
  const { mainSections } = data;
  const total_wrong_answer = mainSections.total_wrong_answer.score;
  const total_right_answer = mainSections.total_right_answer.score;

  const chartData = [
    ["Task", "total answers"],
    ["right answer", total_right_answer],
    ["Wrong Answers", total_wrong_answer],
  ];

  return (
    <div className="">
    <div className="">
    </div>
    <Chart
      chartType="PieChart"  
      width="95%"
      height="260px"
      data={chartData}
      options={options}
      
  />
  </div>
  );
}

export default Pie2;