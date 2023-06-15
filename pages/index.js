import React, { Component } from "react";
import styled from "styled-components";
import fs from "fs";

// components
import PageHead from "../components/PageHead/PageHead";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import FeaturedOffers from "../components/FeaturedOffers/FeaturedOffers";

import Slider from "react-slick";
import "../node_modules/react-slick/";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderWrap = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 47px;
`;

class Home extends Component {
  render() {
    const { offers } = this.props;
    const categories = offers.categories;

    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };

    return (
      <>
        <PageHead />

        <main>
          <Container>
            <HeaderWrap>
              <h1>Big saving on all inclusive trips</h1>
              <Button>Kliknij mnie</Button>
            </HeaderWrap>
          </Container>

          <Container>
            <Slider {...settings}>
              {categories.map((categorie, index) => (
                <FeaturedOffers
                  key={index}
                  country={categorie.country}
                  imagePath={categorie.imagePath}
                  offers={categorie.offers}
                />
              ))}
            </Slider>
          </Container>
        </main>

        <Footer />
      </>
    );
  }
}

export async function getStaticProps() {
  const jsonData = fs.readFileSync("./data/offers.json", "utf-8");
  const offers = JSON.parse(jsonData);

  return {
    props: {
      offers,
    },
  };
}

export default Home;
