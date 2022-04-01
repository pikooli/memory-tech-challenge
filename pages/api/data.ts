import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

import _ from "lodash";
import summaryComputingService from "services/summaryComputingService";
import monthlyComputingService from "services/monthlyComputingService";
import csvToArray from "utils/csvToArray";

const FILE = "csv/memory-tech-challenge-data.csv";
const file = fs.readFileSync(path.resolve("./public", FILE), {
  encoding: "utf8",
});
const csv = csvToArray(file, /(?!\B"[^"]*),(?![^"]*"\B)/);

//
export default async function data(req: NextApiRequest, res: NextApiResponse) {
  const { country } = req.query;
  const datasets = country ? _.filter(csv, ["country", country]) : csv;
  const summary = summaryComputingService(datasets);
  const monthlyRevenue = monthlyComputingService(datasets);
  res.json({ summary, monthlyRevenue });
}
