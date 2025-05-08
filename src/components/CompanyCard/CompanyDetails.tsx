import { Company } from "../../pages/app";

export const CompanyDetails = ({ company }: { company: Company }) => {
  const colors = ["red", "blue", "yellow", "green", "purple"];

  const generateRandomColor = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const randomColor = generateRandomColor(colors.length);

  const colorBoxStyles = {
    background: `${colors[randomColor]}`,
    height: "50px",
    width: "35px",
    marginTop: "12px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Company: {company.name}</span>
      <span>Employees: {company.employees}</span>
      <div style={colorBoxStyles} />
    </div>
  );
};
