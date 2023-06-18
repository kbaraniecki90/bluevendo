import React, { Component, createRef } from "react";
import styled, { css } from "styled-components";
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
  margin-top: clamp(15px, var(--scale), 49px);
  margin-bottom: clamp(40px, var(--scale), 48px);

  h1 {
    font-weight: 700;
  }

  button {
    @media (max-width: 767px) {
      ${css`
        display: none;
      `}
    }
  }
`;

const PageMain = styled.main`
  margin-bottom: 30px;
`;

const SliderNavWrap = styled.nav`
  position: relative;
`;
const SliderNav = styled.div`
  position: absolute;
  top: 18px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    ${css`
      display: none;
    `}
  }
`;

const PageFooter = styled.footer`
  margin-top: 30px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    ${css`
      display: none;
    `}
  }

  button {
    width: 100%;
  }
`;

class Home extends Component {
  sliderRef = createRef();

  handlePrev = () => {
    this.sliderRef.current.slickPrev();
  };

  handleNext = () => {
    this.sliderRef.current.slickNext();
  };

  render() {
    const { offers } = this.props;
    const categories = offers.categories;

    const settings = {
      dots: false,
      arrows: false,
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
          },
        },
      ],
    };

    return (
      <>
        <PageHead />

        <PageMain>
          <Container>
            <HeaderWrap>
              <h1>Big saving on all inclusive trips</h1>
              <Button>See all offers</Button>
            </HeaderWrap>
          </Container>

          <Container>
            <SliderNavWrap>
              <Slider ref={this.sliderRef} {...settings}>
                {categories.map((categorie, index) => (
                  <FeaturedOffers
                    key={index}
                    country={categorie.country}
                    imagePath={categorie.imagePath}
                    offers={categorie.offers}
                  />
                ))}
              </Slider>
              <SliderNav>
                <span onClick={this.handlePrev}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8L10 12L14 16"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span onClick={this.handleNext}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 8L14 12L10 16"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </SliderNav>
            </SliderNavWrap>
          </Container>

          <PageFooter>
            <Container>
              <Button>See all offers</Button>
            </Container>
          </PageFooter>
        </PageMain>

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
