// components/ChartComponent.js
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ data }: any) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: data,
        });
      }
    }

    // Cleanup: Destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
