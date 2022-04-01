import React from "react";
import countriesList from "utils/countriesList";

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
