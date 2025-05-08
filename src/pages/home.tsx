import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Homepage React Projects</h1>
      <h2>Select a project below</h2>
      <ul style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
        <li
          style={{
            padding: "8px",
            border: "1px solid black",
            listStyle: "none",
          }}
          onClick={() => navigate("/accordion")}
        >
          Accordion Project
        </li>
        <li
          style={{
            padding: "8px",
            border: "1px solid black",
            listStyle: "none",
          }}
          onClick={() => navigate("/star-rating")}
        >
          Star Rating Project
        </li>
      </ul>
    </>
  );
};
