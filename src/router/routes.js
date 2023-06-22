import Footer from 'components/Layout/Footer/Footer';
import Header from 'components/Layout/Header/Header';
import ScrollToTop from 'hooks/ScrollToTop';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

export function Root() {
  const [topHeaderVisible, setTopHeaderVisible] = useState(true);
  const [leftNavFixed, setLeftNavFixed] = useState(true);
  let [footerOffsetProps, setFooterOffsetProps] = useState(0);
  const footerRef = useRef(null);
  const { pathname } = useLocation();

  const refs = {
    headerRef: useRef(null),
    topHeaderRef: useRef(null),
  };
  //! 상단 헤더와 오른쪽 네브바 스크롤 이벤트

  useEffect(() => {
    const handleScroll = () => {
      const footerTop = footerRef.current.offsetTop; //! 푸터 최상단 위치
      const windowHeight = window.innerHeight; // ! 브라우저 높이
      const footerOffset = footerTop - windowHeight; // ! 푸터 위치 - 브라우저 높이

      if (refs.headerRef && footerRef) {
        if (window.innerWidth > 1024) {
          if (window.pageYOffset >= footerOffset) {
            setLeftNavFixed(false);
          } else {
            setLeftNavFixed(true);
          }
        }
      }

      // ! 상단 헤더 숨기는 이벤트
      if (refs.headerRef) {
        //! 아래 코드가 작동 안해서 임시로 80px 값으로 적어둠
        // if (window.scrollY > refs.topHeaderRef.current.offsetHeight) {
        if (window.scrollY < 80) {
          if (window.innerWidth > 991) {
            setTopHeaderVisible(true);
            setFooterOffsetProps(0);
          }
        } else {
          if (window.innerWidth > 991) {
            setTopHeaderVisible(false);
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
