import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import mainImage from '../../assets/images/main.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.section`
  margin-top: 150px;
  .slick-slider {
  }
  .slick-dots {
    bottom: -70px;
  }
  .slick-dots li.slick-active button:before {
    color: #e40177;
  }
`;

const MainImgBox = styled.div`
  outline: none;
  height: 640px;
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
function MainCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <MainImgBox>
          <MainImg src={mainImage} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={mainImage} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={mainImage} alt="캐러셀메인" />
        </MainImgBox>
      </Slider>
    </SliderContainer>
  );
}

export default MainCarousel;
