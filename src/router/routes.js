import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import ScrollToTop from 'hooks/ScrollToTop';
import GlobalStyle from 'styles/GlobalStyle';

export function Root() {
  const [topHeaderVisible, setTopHeaderVisible] = useState(true);
  const [leftNavFixed, setLeftNavFixed] = useState(true);
  const [footerOffsetProps, setFooterOffsetProps] = useState(0);
  const footerRef = useRef(null);
  const { pathname } = useLocation();

  const refs = {
    headerRef: useRef(null),
    topHeaderRef: useRef(null),
  };
  //! 상단 헤더와 오른쪽 네브바 스크롤 이벤트

  // 상단 헤더와 네브바 스크롤 이벤트
  useEffect(() => {
    const handleScroll = () => {
      const footerTop = footerRef.current && footerRef.current.offsetTop; // 푸터 최상단 위치
      const windowHeight = window.innerHeight; //  브라우저 높이
      const footerOffset = footerTop - windowHeight; // 현재 브라우저 높이 - 푸터 최상단 위치

      // 네브바 고정
      if (refs.headerRef && footerRef) {
        if (window.innerWidth > 1024) {
          // 브라우저 너비가 1024 보다 클 때
          if (window.scrollY >= footerOffset) {
            setLeftNavFixed(false);
          } else {
            setLeftNavFixed(true);
          }
        }
      }

      //  상단 헤더 표시
      if (refs.headerRef) {
        if (window.scrollY < 80) {
          //스크롤 높이가 80 보다 작을 때
          if (window.innerWidth > 991) {
            // 브라우저 너비가 991보다 클 때
            setTopHeaderVisible(true); // 헤더 보이게
            setFooterOffsetProps(0);
          }
        } else {
          if (window.innerWidth > 991) {
            //스크롤 높이가 80 보다 크면서 브라우저 너비가 991보다 클 때
            setTopHeaderVisible(false); //헤더 사라짐
            setFooterOffsetProps(footerOffset);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // ! clean up
    };
  }, [refs.headerRef, refs.topHeaderRef, pathname, footerOffsetProps]);

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Header
        ref={refs}
        topHeaderVisible={topHeaderVisible}
        leftNavFixed={leftNavFixed}
        footerOffsetProps={footerOffsetProps}
      />
      <Outlet />
      <Footer ref={footerRef} />
    </>
  );
}
