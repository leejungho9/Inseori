import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Footer from './compoents/Footer/Footer';
import Header from './compoents/Header/Header';
import RoomA from './pages/Rooms/RoomA';
import { useEffect } from 'react';

function App() {
  //! 추후에 사용
  // window.scrollTo(0, 0);

  //! 헤더 스크롤 이벤트
  useEffect(() => {
    const handleScroll = () => {
      const headerEl = document.querySelector('.header');
      const footerEl = document.querySelector('.footer');
      if (headerEl && footerEl) {
        const footerTop = footerEl.offsetTop; //! 푸터 최상단 위치
        const windowHeight = window.innerHeight; // ! 브라우저 높이
        const offsetMenu = footerTop - windowHeight; // ! 푸터 위치 - 브라우저 높이
        if (window.innerWidth > 1024) {
          if (window.pageYOffset >= offsetMenu) {
            headerEl.style.position = 'absolute';
            headerEl.style.top = offsetMenu + 'px';
          } else {
            headerEl.style.position = 'fixed';
            headerEl.style.top = '0';
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/RoomA" element={<RoomA />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
