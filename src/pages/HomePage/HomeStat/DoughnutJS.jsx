'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutJS = ({progress = 62}) => {

  const chartContainerRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: 200, height: 200 });

  useEffect(() => {
    const updateChartSize = () => {
      if (chartContainerRef.current) {
        const containerWidth = chartContainerRef.current.offsetWidth;
        setChartSize({ width: containerWidth, height: containerWidth });
      }
    };

    window.addEventListener("resize", updateChartSize);
    updateChartSize();

    return () => {
      window.removeEventListener("resize", updateChartSize);
    };
  }, []);

  const remaining = 100 - progress;

  return (
    <div ref={chartContainerRef} style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <Doughnut 
        data={{
          datasets: [
            {
              label: "Progress",
              data: [progress, remaining], 
              cutout: '95%',
              radius: 50,
              // cutout: 135,
              // radius: 65,
              backgroundColor: [
                '#FF8E00', 
                '#EDEDED', 
              ],
              hoverOffset: 16,
              borderWidth: 0,
              spacing: 0,
              // animation: {
              //   animateScale: true
              // }
            }
          ]
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: {
            animateScale: true
          }
        }}
        width={chartSize.width}
        height={chartSize.height}
      />
    </div>
  )
}

export default DoughnutJS