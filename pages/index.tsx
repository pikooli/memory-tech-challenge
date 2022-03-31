import { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";

import i18n from "lib/i18n";
import Layout from "components/Layout";
import Summary from "components/Summary";

type Data = {
  summary: {
    totalRevenue: number;
    averageRevenue: number;
    numberOfCustomers: number;
  };
  monthlyRevenue: number;
};

export const getServerSideProps: GetServerSideProps = i18n.getTranslations();

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch("/api/data").then(async (res) => {
      const data = await res.json();
      setData(data);
    });
  });

  return <Layout>{data ? <Summary summary={data?.summary} /> : null}</Layout>;
};

export default Home;
