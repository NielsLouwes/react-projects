// render 5 boxes
// try to fill them programatically based on its index of the click

import { StarRating } from "../components/StarRating/StarRating";

const ratings = [1, 2, 3, 4, 5];

export const StarRatingPage = () => {
  return (
    <>
      <h1>Star Rating Project</h1>
      <p>Leave a rating</p>
      <div style={{ display: "flex", gap: "12px" }}>
        {ratings.map((rating) => (
          <StarRating number={rating} />
        ))}
      </div>
    </>
  );
};
