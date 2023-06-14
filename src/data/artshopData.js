import banner from 'assets/images/artshop/banner.png';
import artshop1 from 'assets/images/artshop/artshop1.png';
import artshop2 from 'assets/images/artshop/artshop2.png';
import artshop3 from 'assets/images/artshop/artshop3.png';
const artshopData = {
  id: 1,
  title: '일상이 예술, 예술이 일상',
  desc: 'Aat 카페는 커피, 식사와 와인 그리고 푸드마켓이 한 공간에 있는 One-stop-shop입니다. 간단한 식사는 물론 다양한 디저트와 와인리스트를 보유하고 있으며 집으로 돌아 갈 때는 먹거리와 식재료 구입이 가능한 새로운 라이프 스타일 공간을 추구하고 있습니다.',
  banner: `${banner}`,
  gallery: [
    { id: 1, url: `${artshop1}` },
    { id: 2, url: `${artshop2}` },
    { id: 3, url: `${artshop3}` },
    { id: 4, url: `${artshop1}` },
    { id: 5, url: `${artshop2}` },
    { id: 6, url: `${artshop3}` },
  ],
};

export default artshopData;
