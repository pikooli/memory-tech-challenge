import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export const optionsDefault: Obj = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export type Datasets = {
  data: number[];
  label: string;
  borderColor?: string;
  backgroundColor?: string;
  order?: number;
};

type Props = {
  datasets: Datasets[];
  labels: string[];
  title?: string;
  options?: Obj;
};

const LineChart: React.FC<Props> = ({ labels, datasets, title, options }) => {
  if (!labels || !datasets) {
    return <></>;
  }
  const data = {
    labels: labels,
    datasets: datasets,
  };
  return (
    <Chart
      options={options ? { ...optionsDefault, ...options } : optionsDefault}
      type="bar"
      data={data}
    />
  );
};

export default LineChart;
