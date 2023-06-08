import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoomA_1 from 'assets/images/RoomA/RoomB_1.jpg';
import RoomA_2 from 'assets/images/RoomA/RoomB_2.jpg';
import RoomA_3 from 'assets/images/RoomA/RoomB_3.jpg';
import RoomA_4 from 'assets/images/RoomA/RoomB_4.jpg';
import RoomA_5 from 'assets/images/RoomA/RoomB_5.jpg';

const SliderContainer = styled.section`
  .slick-slider {
  }
  .slick-list {
  }
  .slick-track {
  }
  .slick-slide {
  }
`;
const MainImgBox = styled.div`
  outline: none;
  height: 277px !important;
  width: 277px !important;
`;
const MainImg = styled.img`
  height: 277px !important;
  width: 277px !important;
  object-fit: cover;
`;

function RoomAGalleryCarousel() {
  const settings = {
    infinite: true, // 슬라이드 갯수에 상관없이 무한반복
    // autoplay: true,
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
          <MainImg src={RoomA_1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_3} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_4} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_5} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_1} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_2} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_3} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_4} alt="캐러셀메인" />
        </MainImgBox>
        <MainImgBox>
          <MainImg src={RoomA_5} alt="캐러셀메인" />
        </MainImgBox>
      </Slider>
    </SliderContainer>
  );
}

export default RoomAGalleryCarousel;
