import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.section`
  .slick-slider {
  }
  .slick-dots {
    position: static;
    padding-top: 50px;

    @media screen and (max-width: 991px) {
      padding-top: 40px;
      li button:before {
        font-size: 10px;
      }
    }
  }
  .slick-dots li.slick-active button:before {
    color: var(--text-point-color);
  }
`;

const MainImgBox = styled.div`
  outline: none;
  @media screen and (max-width: 1440px) {
    height: 540px;
  }
  @media screen and (max-width: 991px) {
    height: 480px;
  }
  @media screen and (max-width: 500px) {
    height: 550px;
  }
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
function MainBannerCarousel({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <MainImgBox key={index}>
            <MainImg src={slide.url} alt="캐러셀메인" />
          </MainImgBox>
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default MainBannerCarousel;
