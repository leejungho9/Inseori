import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainImage1 from '../../assets/images/MainImage/MainImage1.jpg';
import MainImage2 from '../../assets/images/MainImage/MainImage2.jpg';
import MainImage3 from '../../assets/images/MainImage/MainImage3.jpg';
import MainImage4 from '../../assets/images/MainImage/MainImage4.jpg';
import MainImage5 from '../../assets/images/MainImage/MainImage5.jpg';
import MainImage6 from '../../assets/images/MainImage/MainImage6.jpg';

const SliderContainer = styled.div`
  .slick-list {
    padding: 0 !important;
  }
  .slick-slide {
    height: 435px !important;
    width: 435px !important;
    margin-left: 20px;
  }
  .slick-slide img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
const MainImgBox = styled.div`
  outline: none;
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
`;

function MainImageCarousel() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 4,
    draggable: true,
    pauseOnHover: false,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <MainImgBox>
          <MainImg src={MainImage1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage3} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage4} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage5} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage6} alt="캐러셀메인" />
        </MainImgBox>
      </Slider>
    </SliderContainer>
  );
}

export default MainImageCarousel;
