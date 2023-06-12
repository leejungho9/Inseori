import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import coffee1 from 'assets/images/Cafe/coffee1.png';
import coffee2 from 'assets/images/Cafe/coffee2.png';
import coffee3 from 'assets/images/Cafe/coffee3.png';
import Slider from 'react-slick';

const SliderContainer = styled.section`
  .slick-slide {
    width: 465px !important;
  }
  .slick-track {
    height: 450px;
  }
`;
const MainImgBox = styled.div`
  outline: none;
`;
const MainImg = styled.img`
  height: 450px !important;
  width: 450px !important;
  object-fit: cover;
`;

const CafeGalleryCarousel = () => {
  const settings = {
    infinite: true, // 슬라이드 갯수에 상관없이 무한반복
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 1, //보여지는 슬라이드 갯수
    slidesToScroll: 1, //스크롤 넘겼을때 넘어가는 슬라이드 갯수
    draggable: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <MainImgBox>
          <MainImg src={coffee1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee3} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee3} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee3} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee3} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={coffee3} alt="캐러셀메인" />
        </MainImgBox>
      </Slider>
    </SliderContainer>
  );
};

export default CafeGalleryCarousel;
