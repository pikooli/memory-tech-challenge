import { NextApiRequest, NextApiResponse } from "next";

import _ from "lodash";
import summaryComputingService from "services/summaryComputingService";
import monthlyComputingService from "services/monthlyComputingService";
import csv from "utils/csvParsing";

//
export default async function data(req: NextApiRequest, res: NextApiResponse) {
  const { country } = req.query;
  const datasets = country ? _.filter(csv, ["country", country]) : csv;
  const summary = summaryComputingService(datasets);
  const monthlyRevenue = monthlyComputingService(datasets);
  res.json({ summary, monthlyRevenue });
}
