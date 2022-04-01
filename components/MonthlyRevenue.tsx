import React from "react";
import { useTranslation } from "next-i18next";
import ChartJs from "lib/ChartJs";

type Props = { monthlyRevenue: Obj };

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        callback: function (value: number) {
          return value + "€";
        },
      },
    },
  },
};

const MonthlyRevenue: React.FC<Props> = ({ monthlyRevenue }) => {
  const { t } = useTranslation("common");
  const data: number[] = [];
  const labels: string[] = [];
  for (let i = 0; i < 12; i++) {
    data.push(monthlyRevenue[i]);
    labels.push(t(`month.${i}`));
  }
  const datasets = [
    {
      label: "Bar",
      backgroundColor: "rgb(75, 192, 192)",
      data: data,
      order: 1,
    },
    {
      label: "Line",
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235)",
      data: data,
      type: "line" as const,
      order: 0,
    },
  ];

  return (
    <div className="mx-auto mt-3 lg:w-3/4 xl:w-2/3 mt-3 bg-white p-3 rounded-lg">
      <h3 className="text-center">{t("monthlyRevenue")}</h3>
      <ChartJs datasets={datasets} labels={labels} options={options} />
    </div>
  );
};

export default MonthlyRevenue;
