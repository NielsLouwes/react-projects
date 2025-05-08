import { Route, Routes } from "react-router-dom";
import { Accordion } from "./Accordion";
import { Home } from "./home";
import { StarRatingPage } from "./star-rating";

export type Company = {
  id: number;
  name: string;
  employees: number;
};

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/star-rating" element={<StarRatingPage />} />
      </Routes>
    </>
  );
};
