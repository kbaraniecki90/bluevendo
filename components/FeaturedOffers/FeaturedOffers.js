import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

import OfferCard from "../OfferCard/OfferCard";
import Header from "../Header/Header";
import Button from "../Button/Button";

const FeaturedOffersContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 7.85156px rgba(79, 79, 79, 0.3);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    ${css`
      box-shadow: 3px 3px 9px rgba(79, 79, 79, 0.3);
    `}
  }
`;

const FeaturedOffersHeader = styled.header`
  position: relative;

  h2 {
    position: absolute;
    top: 24px;
    left: 24px;
    font-size: clamp(2.4rem, var(--scale), 3.2rem);
    font-weight: 600;
    color: #ffffff;
    text-shadow: 0px 2px 7px rgba(66, 68, 90, 1);
  }

  img {
    width: 100%;
    height: clamp(174px, var(--scale), 199px);
    object-fit: cover;
    border-radius: 6px;
  }
`;

const FeaturedOffersFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 15.7px 0;
`;

const FeaturedOffersContent = styled.div`
  @media (max-width: 767px) {
    ${css`
      :nth-child(n + 5) {
        display: none;
      }
    `}
  }
`;

const FeaturedOffers = ({ country, offers, imagePath }) => {
  const reanderOfferCards = () => {
    const renderedOfferCards = [];

    if (offers) {
      offers.forEach((item, index) => {
        renderedOfferCards.push(
          <OfferCard
            key={index}
            hotelName={item.hotelName}
            stars={item.stars}
            startDate={item.startDate}
            basePrice={item.basePrice}
            promoPrice={item.promoPrice}
            lastMinute={item.lastMinute}
            mealCategory={item.mealCategory}
            path={item.path}
          />
        );
      });
    }

    return renderedOfferCards;
  };

  return (
    <FeaturedOffersContainer>
      <FeaturedOffersHeader>
        <Header level={2}>{country}</Header>
        <Image src={imagePath} alt="Opis zdjęcia" width={600} height={400} />
      </FeaturedOffersHeader>
      <FeaturedOffersContent>{reanderOfferCards()}</FeaturedOffersContent>
      <FeaturedOffersFooter>
        <Button type="link" icon={"./arrow-right.svg"}>
          See all offers in {country}
        </Button>
      </FeaturedOffersFooter>
    </FeaturedOffersContainer>
  );
};

export default FeaturedOffers;
