import React from "react";
import { useTranslation } from "next-i18next";
import converNumber from "utils/converNumber";

type Props = {
  summary: {
    totalRevenue: number;
    averageRevenue: number;
    numberOfCustomers: number;
  };
};

const Summary: React.FC<Props> = ({
  summary: { totalRevenue, averageRevenue, numberOfCustomers },
}) => {
  const { t } = useTranslation("common");

  const Display = ({
    title,
    number = 0,
    currency,
  }: {
    title: string;
    number?: number;
    currency?: boolean;
  }) => {
    return (
      <div className="card mx-auto w-full xl:w-96 p-6 h-36">
        <div className="text-2xl font-bold">
          {converNumber(number)} {currency && "€"}
        </div>
        <div className="text-base mb-3">{title}</div>
      </div>
    );
  };

  return (
    <div className="grid md:grid-cols-3 gap-1 my-6">
      <Display title={t("revenue")} currency number={totalRevenue} />
      <Display title={t("avg")} currency number={averageRevenue} />
      <Display title={t("customers")} number={numberOfCustomers} />
    </div>
  );
};

export default Summary;
