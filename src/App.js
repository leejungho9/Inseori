import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Footer from './compoents/Footer/Footer';
import Header from './compoents/Header/Header';
import RoomA from './pages/Rooms/RoomA';
import { useEffect, useRef, useState } from 'react';
import OneDayCalss from './pages/OneDayClass/OneDayCalss';

function App() {
  const [topHeaderVisible, setTopHeaderVisible] = useState(true);
  const [leftNavFixed, setLeftNavFixed] = useState(true);
  let [footerOffsetProps, setFooterOffsetProps] = useState(0);
  const footerRef = useRef(null);

  const refs = {
    headerRef: useRef(null),
    topHeaderRef: useRef(null),
  };
  //! 헤더 스크롤 이벤트
  useEffect(() => {
    const handleScroll = () => {
      const footerTop = footerRef.current.offsetTop; //! 푸터 최상단 위치
      const windowHeight = window.innerHeight; // ! 브라우저 높이
      const footerOffset = footerTop - windowHeight; // ! 푸터 위치 - 브라우저 높이
      setFooterOffsetProps(footerOffset);
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
        //! 안먹어서 일단 150px 값으로 적어둠
        // if (window.scrollY > refs.topHeaderRef.current.offsetHeight) {
        if (window.scrollY > 150) {
          if (window.innerWidth > 991) {
            setTopHeaderVisible(false);
          }
        } else {
          if (window.innerWidth > 991) {
            setTopHeaderVisible(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [refs.headerRef, refs.topHeaderRef]);

  return (
    <>
      <Header
        ref={refs}
        topHeaderVisible={topHeaderVisible}
        leftNavFixed={leftNavFixed}
        footerOffsetProps={footerOffsetProps}
      />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/roomA" element={<RoomA />}></Route>
        <Route path="/onedayclass" element={<OneDayCalss />}></Route>
      </Routes>
      <Footer ref={footerRef} />
    </>
  );
}

export default App;
