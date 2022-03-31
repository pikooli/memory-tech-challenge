const FIELDS = {
  date: "date",
  order_id: "string",
  customer_id: "string",
  country: "string",
  product_code: "string",
  product_description: "string",
  quantity: "number",
  unit_price: "number",
};

type Headers = [
  "date",
  "order_id",
  "customer_id",
  "country",
  "product_code",
  "product_description",
  "quantity",
  "unit_price"
];

export default function csvToArray(
  str: string,
  delimiter: string | RegExp = ","
): Order[] {
  str = str.trim();
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter) as Headers;
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce((object: any, header, index) => {
      switch (FIELDS[header]) {
        case "number":
          const value = Number(values[index]);
          object[header] = !Number.isNaN(value) ? value : 0;
          return object;
        case "string":
          object[header] = values[index];
          return object;
        case "date":
          object[header] = new Date(values[index]);
          return object;
        default:
          object[header] = values[index];
          return object;
      }
    }, {});
    return el;
  });
  return arr;
}
