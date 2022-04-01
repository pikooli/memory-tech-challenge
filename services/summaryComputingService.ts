export default function summaryComputingService(orders: Order[]) {
  const ordersBool: { [key: string]: boolean } = {};
  const customersBool: { [key: string]: boolean } = {};
  let orderNumber = 0;
  let numberOfCustomers = 0;
  let totalRevenue = Math.floor(
    orders.reduce((previousValue: number, order: Order) => {
      if (!ordersBool[order.order_id]) {
        ordersBool[order.order_id] = true;
        orderNumber++;
      }
      if (!customersBool[order.customer_id]) {
        customersBool[order.customer_id] = true;
        numberOfCustomers++;
      }
      return previousValue + order.quantity * order.unit_price;
    }, 0)
  );
  return {
    totalRevenue,
    averageRevenue: Math.floor((totalRevenue / orderNumber) * 100) / 100,
    numberOfCustomers,
  };
}
