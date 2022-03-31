/// <reference path="./common.d.ts" />

type Order = {
  date: Date;
  order_id: string;
  customer_id: string;
  country: string;
  product_code: string;
  product_description: string;
  quantity: number;
  unit_price: number;
};
