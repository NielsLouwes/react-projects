import React from "react";
import { Company } from "../../pages/app";
import { CompanyDetails } from "./CompanyDetails";

type CompanyCardProps = {
  company: Company;
  setSelected: React.Dispatch<React.SetStateAction<number | undefined>>;
  selected: number | undefined;
};

export const CompanyCard = ({
  company,
  setSelected,
  selected,
}: CompanyCardProps) => {
  return (
    <li style={{ border: "1px solid black", padding: "16px" }}>
      <h2 onClick={() => setSelected(company.id)}>{company.name}</h2>
      {selected === company.id && (
        <section style={{ display: "flex", gap: "12px" }}>
          <div>
            <img
              src={`https://picsum.photos/100?random=${Math.random()}`}
              alt={company.name}
            />
          </div>
          <CompanyDetails company={company} />
        </section>
      )}
    </li>
  );
};
