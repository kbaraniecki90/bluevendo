import React from "react";
import styled from "styled-components";
import Image from "next/image";

import OfferCard from "../OfferCard/OfferCard";

const FeaturedOffersContainer = styled.div`
  display: flex;
  flex-direction: column;
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
          />
        );
      });
    }

    return renderedOfferCards;
  };

  return (
    <FeaturedOffersContainer>
      <h2>{country}</h2>
      <Image src={imagePath} alt="Opis zdjęcia" width={600} height={400} />
      {reanderOfferCards()}
    </FeaturedOffersContainer>
  );
};

export default FeaturedOffers;
