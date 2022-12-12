import React, { useEffect, useState } from "react";
import { fetchDailyData } from "./Data";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [dailyData, setDailyData] = useState([]);

  const fetchApi = async () => {
    const dailyData = await fetchDailyData();

    
    setDailyData(dailyData);

  };


  useEffect(() => {
    fetchApi();
  }, []);
  
  const lineChart = dailyData  ? (

    <Line
      data={{
        labels: Array.from(dailyData.keys()),
        datasets: [
          {
            data: Array.from(dailyData.entries()),
            label: "Calories",
            borderColor: "rgb(0, 217, 255)",
            fill: false,
          },
          {
            data: Array.from(dailyData.entries()),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgb(255, 0, 0)",
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <div>{lineChart}</div>
    </>
  );
};

export default LineChart;