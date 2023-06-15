import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import StarRating from "../StarRating/StarRating";

const OfferCardConteiner = styled.div`
  background-color: #ffffff;
  padding: 18px;

  &:nth-of-type(odd) {
    background-color: #f3f4f6;
  }
`;

const OfferCardHeader = styled.header``;
const OfferCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
const OfferCardLeftCol = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const OfferCardRightCol = styled.div`
  width: 40%;
  text-align: right;
`;
const OfferCardStarRating = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
`;

function formatDate(date) {
  const parts = date.split("-");
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];

  return `${day}.${month}.${year}`;
}

const OfferCard = ({
  hotelName,
  stars,
  startDate,
  basePrice,
  promoPrice,
  lastMinute,
  mealCategory,
}) => {
  return (
    <OfferCardConteiner>
      <OfferCardHeader>
        <Header level={3}>{hotelName}</Header>
      </OfferCardHeader>

      <OfferCardWrap>
        <OfferCardLeftCol>
          {stars ? (
            <OfferCardStarRating>
              <StarRating rating={stars} />
            </OfferCardStarRating>
          ) : null}

          {startDate ? (
            <p>
              <time>{formatDate(startDate)}</time>
            </p>
          ) : null}

          {lastMinute ? <p>Last minute</p> : null}
          {mealCategory ? <p>{mealCategory}</p> : null}
        </OfferCardLeftCol>

        <OfferCardRightCol>
          {basePrice ? <p>{basePrice}</p> : null}
          {promoPrice ? <p>{promoPrice}</p> : null}
          <p>per person</p>
        </OfferCardRightCol>
      </OfferCardWrap>
    </OfferCardConteiner>
  );
};

export default OfferCard;
