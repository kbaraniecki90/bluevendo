import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Header from "../Header/Header";
import StarRating from "../StarRating/StarRating";

const OfferCardConteiner = styled.div`
  background-color: #ffffff;
  padding: 18px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:nth-of-type(even) {
    background-color: #f3f4f6;
  }

  &:hover {
    background-color: #c7e7f5;
  }
`;

const OfferCardHeader = styled.header`
  font-weight: 700;
`;
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
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
const OfferCardStarRating = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
`;

const OfferCardDate = styled.p`
  opacity: 0.75;
  font-weight: 700;
  margin-bottom: 5px;
`;

const OfferLastMinute = styled.p`
  color: #ff5353;
  font-weight: 600;
`;
const OfferMealCategory = styled.p`
  opacity: 0.5;
  font-weight: 500;
`;

const OfferType = styled.div`
  display: flex;
  column-gap: 26px;
  row-gap: 13px;
  flex-wrap: nowrap;
`;

const OfferPrice = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  color: #3e4958;
  text-align: right;
`;
const OfferOldPrice = styled.p`
  color: #ff5353;
  text-decoration-line: line-through;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 3px;
  text-align: right;
`;
const OfferOldPerson = styled.p`
  color: #3e4958;
  font-weight: 500;
  font-size: 12px;
  opacity: 0.75;
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
  path,
}) => {
  return (
    <OfferCardConteiner>
      <Link href={`/offers/${path}`}>
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
              <OfferCardDate>
                <time>{formatDate(startDate)}</time>
              </OfferCardDate>
            ) : null}

            <OfferType>
              {lastMinute ? (
                <OfferLastMinute>Last minute</OfferLastMinute>
              ) : null}
              {mealCategory ? <p>{mealCategory}</p> : null}
            </OfferType>
          </OfferCardLeftCol>

          <OfferCardRightCol>
            {promoPrice ? <OfferOldPrice>{basePrice} pln</OfferOldPrice> : null}

            {basePrice ? (
              <OfferPrice>{promoPrice ? promoPrice : basePrice} pln</OfferPrice>
            ) : null}

            <OfferOldPerson>per person</OfferOldPerson>
          </OfferCardRightCol>
        </OfferCardWrap>
      </Link>
    </OfferCardConteiner>
  );
};

export default OfferCard;
