import React, { useEffect, useState } from "react";
import { fetchDailyDataCalories,fetchDailyDataSpeed,fetchDailyDataHeartRate } from "./Data";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [dailyDataCalories, setDailyDataCalories] = useState([]);
  const [dailyDataSpeed, setDailyDataSpeed] = useState([]);
  const [dailyDataHeartRate, setDailyDataHeartRate] = useState([]);

  const fetchApi = async () => {
    const dailyDataCalories = await fetchDailyDataCalories();
    setDailyDataCalories(dailyDataCalories);
    const dailyDataSpeed = await fetchDailyDataSpeed();
    setDailyDataSpeed(dailyDataSpeed);
    const dailyDataHeartRate = await fetchDailyDataHeartRate();
    setDailyDataHeartRate(dailyDataHeartRate);
  };


  useEffect(() => {
    fetchApi();
  }, []);
  
  const lineChartCalories = dailyDataCalories  ? (

    <Line
      data={{
        labels: Array.from(dailyDataCalories.keys()),
        datasets: [
          {
            data: Array.from(dailyDataCalories.entries()),
            label: "Calories (calories)",
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }
        ],
      }}
    />
    
  ) : null;

  const lineChartSpeed = dailyDataSpeed  ? (

    <Line
      data={{
        labels: Array.from(dailyDataSpeed.keys()),
        datasets: [
          {
            data: Array.from(dailyDataSpeed.entries()),
            label: "Speed (meters per second)",
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }
        ],
      }}
    />
    
  ) : null;

  const lineChartHeartRate = dailyDataHeartRate  ? (

    <Line
      data={{
        labels: Array.from(dailyDataHeartRate.keys()),
        datasets: [
          {
            data: Array.from(dailyDataHeartRate.entries()),
            label: "Mean Heart Rate (beats per minute)",
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
          }
        ],
      }}
    />
    
  ) : null;

  return (
    <>
      <center><h1>Swimming Metrics</h1></center>
      <div>{lineChartCalories}</div>
      <div>{lineChartSpeed}</div>
      <div>{lineChartHeartRate}</div>
    </>
  );
};

export default LineChart;