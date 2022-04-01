import React from "react";
const languagesList = ["fr", "en"];

export default function SelectLanguages({
  onChange,
  value,
}: {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}) {
  return (
    <select
      name="language"
      className="text-black"
      value={value}
      onChange={onChange}
    >
      {languagesList.map((language) => (
        <option value={language} key={language}>
          {language}
        </option>
      ))}
    </select>
  );
}
