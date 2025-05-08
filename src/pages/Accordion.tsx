import { useState } from "react";
import { Company } from "./app";
import data from "../data.json";
import { CompanyCard } from "../components/CompanyCard/CompanyCard";

export const Accordion = () => {
  const [selected, setSelected] = useState<number | undefined>();

  return (
    <>
      <h1>Accordion</h1>
      <ul className="accordion">
        {data.companies.map((company: Company) => (
          <CompanyCard
            key={company.id}
            company={company}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
      </ul>
    </>
  );
};
