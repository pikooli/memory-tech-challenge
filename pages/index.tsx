import React, { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from "next";

import i18n from "lib/i18n";
import customFetch from "lib/customFetch";

import Layout from "components/Layout";
import Summary from "components/Summary";
import MonthlyRevenue from "components/MonthlyRevenue";
import Spinner from "components/Spinner";
import Form from "components/Form";

const APIURL = "/api/data";

type Data = {
  summary: {
    totalRevenue: number;
    averageRevenue: number;
    numberOfCustomers: number;
  };
  monthlyRevenue: Obj;
};

export const getServerSideProps: GetServerSideProps = i18n.getTranslations();

const Home: NextPage = () => {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch({ url: APIURL }).then(async (res) => {
      const data = await res.json();
      setData(data);
      setLoading((prev) => !prev);
    });
  }, []);

  const onChange = (e: FormEvent) => {
    e.preventDefault();
    const country = e.currentTarget.country.value;
    setLoading((prev) => !prev);
    customFetch({ url: APIURL, params: { country } }).then(async (res) => {
      const data = await res.json();
      setData(data);
      setLoading((prev) => !prev);
    });
  };

  return (
    <Layout>
      {loading && <Spinner />}
      {data && (
        <>
          <Form
            onChange={onChange}
            action="api/data"
            className="flex justify-end"
          />
          <Summary summary={data.summary} />
          <MonthlyRevenue monthlyRevenue={data.monthlyRevenue} />
        </>
      )}
    </Layout>
  );
};

export default Home;
