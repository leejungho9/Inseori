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

const SliderContainer = styled.section`
  max-width: 100%;
  margin: 0 auto;
  .slick-slider {
    width: 100%;
  }
  .slick-list {
    height: 300px;
    margin-right: -20px;
    padding: 0 !important;
  }
  .slick-slide {
    height: 300px !important;
    width: 300px !important;
    margin-left: 20px;
  }
`;
const MainImgBox = styled.div`
  outline: none;
`;
const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function MainGalleryCarousel() {
  const settings = {
    infinite: true, // 슬라이드 갯수에 상관없이 무한반복
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 3, //보여지는 슬라이드 갯수
    slidesToScroll: 4, //스크롤 넘겼을때 넘어가는 슬라이드 갯수
    draggable: true,
    pauseOnHover: false,
    arrows: false,
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
        <MainImgBox>
          <MainImg src={MainImage2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage4} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={MainImage3} alt="캐러셀메인" />
        </MainImgBox>
      </Slider>
    </SliderContainer>
  );
}

export default MainGalleryCarousel;
