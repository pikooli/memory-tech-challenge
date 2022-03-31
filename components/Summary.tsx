import React from "react";

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
  return (
    <div className="card">
      <div>{totalRevenue}</div>
      <div>{averageRevenue}</div>
      <div>{numberOfCustomers}</div>
    </div>
  );
};

export default Summary;
