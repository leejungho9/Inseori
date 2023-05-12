import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import mainImage from '../../assets/images/main.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  width: 1145px;
  height: 640px;

  .slick-dots {
    bottom: -75px;
  }
  .slick-dots li.slick-active button:before {
    color: #e40177;
  }
`;

const MainImgBox = styled.div`
  outline: none;
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
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
