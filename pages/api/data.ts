import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import _ from "lodash";
import summaryComputingService from "services/summaryComputingService";
import monthlyComputingService from "services/monthlyComputingService";
import csvToArray from "utils/csvToArray";

const FILE = "memory-tech-challenge-data.csv";
const PATHFILE = `./public/${FILE}`;
const file = fs.readFileSync(PATHFILE, { encoding: "utf8", flag: "r" });
const csv = csvToArray(file, /(?!\B"[^"]*),(?![^"]*"\B)/);

//
export default async function forgotpassword(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { country } = req.query;
  const datasets = country ? _.filter(csv, ["country", country]) : csv;
  const summary = summaryComputingService(datasets);
  const monthlyRevenue = monthlyComputingService(datasets);
  res.json({ summary, monthlyRevenue });
}
