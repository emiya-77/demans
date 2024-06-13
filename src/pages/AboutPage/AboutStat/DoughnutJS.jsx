'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutJS = ({progress = 50}) => {

  const remaining = 100 - progress;

  return (
    <div>
      <Doughnut 
        data={{
          datasets: [
            {
              label: "Progress",
              data: [progress, remaining], 
              cutout: 135,
              radius: 65,
              backgroundColor: [
                '#7E7E7E',
                '#EDEDED',  
              ],
              hoverOffset: 16,
              borderWidth: 0,
              spacing: 0,
              animation: {
                animateScale: true
              }
            }
          ]
        }}
      />
    </div>
  )
}

export default DoughnutJS