import { NextApiRequest, NextApiResponse } from "next";

import _ from "lodash";
import csv from "utils/csvParsing";

//
export default async function countriesList(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const countries = _.uniq(
    csv.map((data) => {
      return data.country;
    })
  ).sort((country1: string, country2: string) =>
    country1.localeCompare(country2)
  );
  res.json({ countries });
}
