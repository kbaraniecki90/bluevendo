import React from "react";
import styled from "styled-components";

const StarRatingContainer = styled.div`
  display: inline-block;
`;

const Star = styled.span`
  color: ${(props) => (props.filled === "true" ? "#FFD700" : "#CCCCCC")};
  font-size: 16px;
`;

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const filled = i <= rating ? "true" : "false";
      const star = (
        <Star key={i} filled={filled}>
          ★
        </Star>
      );
      stars.push(star);
    }

    return stars;
  };

  return <StarRatingContainer>{renderStars()}</StarRatingContainer>;
};

export default StarRating;
