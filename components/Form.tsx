import React, { useEffect, useState } from "react";
import customFetch from "lib/customFetch";

const APIURL = "/api/countrieslist";

export default function Form({
  onChange,
  action,
  method = "POST",
  className,
}: {
  onChange: React.FormEventHandler<HTMLFormElement>;
  action: string;
  method?: string;
  className?: string;
}) {
  const [countriesList, setCountriesList] = useState<string[]>([]);
  useEffect(() => {
    customFetch({ url: APIURL }).then(async (res) => {
      const data = await res.json();
      setCountriesList(data.countries);
    });
  }, []);
  return (
    <form
      onChange={onChange}
      action={action}
      method={method}
      className={className}
    >
      <select name="country">
        <option value="">All</option>
        {countriesList.map((country) => (
          <option value={country} key={country}>
            {country}
          </option>
        ))}
      </select>
    </form>
  );
}
