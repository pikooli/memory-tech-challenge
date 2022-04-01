export default function monthlyComputingService(orders: Order[]) {
  const monthRevenue: { [key: number]: number } = {};
  orders.forEach((order: Order) => {
    const month = order.date.getMonth();
    const revenue = order.quantity * order.unit_price;
    monthRevenue[month] =
      Math.floor(
        (monthRevenue[month] ? monthRevenue[month] + revenue : revenue) * 100
      ) / 100;
  });
  return monthRevenue;
}
