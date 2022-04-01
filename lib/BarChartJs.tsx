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
import { Bar } from "react-chartjs-2";

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
  options?: Obj;
};

const LineChart: React.FC<Props> = ({ labels, datasets, options }) => {
  if (!labels || !datasets) {
    return <></>;
  }
  const data = {
    labels: labels,
    datasets: datasets,
  };
  return (
    <Bar
      options={options ? { ...optionsDefault, ...options } : optionsDefault}
      data={data}
    />
  );
};

export default LineChart;
