import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
 
ChartJS.register(ArcElement, Tooltip, Legend);
 
export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 13, 15, 20, 11],
      backgroundColor: [
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(75, 192, 192, 0.9)",
        "rgba(153, 102, 255, 0.9)",
        "rgba(255, 159, 64, 0.9)",
      ],
      borderColor: [
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
 
export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "250px",
        height: "250px",
        padding:"200px"
      }}
    >
      <div
        className="test"
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "130px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Test
      </div>
      <Doughnut
        options={{ plugins: { legend: { display: false } } }}
        data={data}
      ></Doughnut>
    </div>
  );
}
