import space1_banner from 'assets/images/culturespace/space1/banner.png';
import space2_banner from 'assets/images/culturespace/space2/banner.png';
import image1 from 'assets/images/culturespace/exhibition/image1.png';
import image2 from 'assets/images/culturespace/exhibition/image2.png';
import image3 from 'assets/images/culturespace/exhibition/image3.png';
import space1_culture1 from 'assets/images/culturespace/space1/culture1.png';
import space1_culture2 from 'assets/images/culturespace/space1/culture2.png';
import space1_culture3 from 'assets/images/culturespace/space1/culture3.png';
import space2_culture1 from 'assets/images/culturespace/space2/culture1.png';
import space2_culture2 from 'assets/images/culturespace/space2/culture2.png';
import space2_culture3 from 'assets/images/culturespace/space2/culture3.png';

const cultureData = [
  {
    id: 1,
    name: '갑빠오의 집',
    title: 'A small, good thing',
    desc: '갑빠오 스튜디오는 일상적이고 사적인 경험을 토대로 다양한 아트웍을 선보이고 있습니다. 온전히 “나"로 존재할 수 있는 자유와 치유의방, 우리는 모두 별것 아니지만, 도움이되는 것들 덕분에 살아갈 수 있습니다.',
    exhibition: [],
    gallery: [
      {
        id: 1,
        url: `${space1_culture1}`,
      },
      {
        id: 2,
        url: `${space1_culture2}`,
      },
      {
        id: 3,
        url: `${space1_culture3}`,
      },
      {
        id: 4,
        url: `${space1_culture1}`,
      },
      {
        id: 5,
        url: `${space1_culture2}`,
      },
      {
        id: 6,
        url: `${space1_culture3}`,
      },
      {
        id: 7,
        url: `${space1_culture1}`,
      },
    ],
    banner: `${space1_banner}`,
  },
  {
    id: 2,
    name: '반창고',
    title: '반창고',
    desc: '옛날 곡식창고로 쓰이던 건물입니다. 반 +  heal  : 지역사회, 환경을 살리는 치유창고, 함께 쓰는 나눔창고 중의적 의미를 두고 운영하는 갤러리입니다. 바뀌는 전시와 다양한 대관 행사들로 채워지며 지역민들과의 교류를 도모하는 공간입니다.',
    exhibition: [
      {
        id: 1,
        name: '온기를 전하는 풍경',
        author: '김경화',
        startDate: '2023.10.01',
        endDate: '2023.12.31',
        url: `${image1}`,
      },
      {
        id: 2,
        name: '소멸하는 아름다움',
        author: '황란',
        startDate: '2023.10.01',
        endDate: '2023.12.31',
        url: `${image2}`,
      },
      {
        id: 3,
        name: '온기를 전하는 풍경',
        author: '김경화',
        startDate: '2023.10.01',
        endDate: '2023.12.31',
        url: `${image3}`,
      },
      {
        id: 4,
        name: '온기를 전하는 풍경',
        author: '김경화',
        startDate: '2023.10.01',
        endDate: '2023.12.31',
        url: `${image3}`,
      },
    ],
    gallery: [
      {
        id: 1,
        url: `${space2_culture1}`,
      },
      {
        id: 2,
        url: `${space2_culture2}`,
      },
      {
        id: 3,
        url: `${space2_culture3}`,
      },
      {
        id: 4,
        url: `${space2_culture1}`,
      },
      {
        id: 5,
        url: `${space2_culture2}`,
      },
      {
        id: 6,
        url: `${space2_culture3}`,
      },
      {
        id: 7,
        url: `${space2_culture1}`,
      },
    ],
    banner: `${space2_banner}`,
  },
];

export default cultureData;
