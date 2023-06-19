import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const AccordionContainer = styled.section`
  flex-grow: 1;
  width: 70%;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 80px 15px 0;
  }
  @media screen and (max-width: 500px) {
    padding-top: 10px;
  }
`;
const AccordionTitleBox = styled.article`
  height: 85px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 10px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    height: 55px;
    padding-bottom: 8px;
  }
`;

const AccordionTitle = styled.h3`
  font-family: 'PretendardSemiBold';
  font-weight: bold;
  font-size: var(--text-size-16);
  color: var(--dark);

  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

const Linebar = styled.hr`
  height: 1px;
  border: none;
  background-color: var(--gray);
`;

const AccordionDescBox = styled.article`
  height: ${({ itemVisible, height }) => (itemVisible ? height + 'px' : '0')};
  opacity: ${({ itemVisible }) => (itemVisible ? 100 : 0)};
  visibility: ${({ itemVisible }) => (itemVisible ? 'visible' : 'hidden')};
  transition: 0.5s;

  @media screen and (max-width: 500px) {
    height: ${({ itemVisible, height }) => (itemVisible ? height + 'px' : '0')};
  }
`;

const AccordionDesc = styled.p`
  font-size: var(--text-size-16);
  color: var(--dark);
  line-height: 180.5%;
  padding: 20px 10px;
  font-family: 'PretendardRegular';

  @media screen and (max-width: 991px) {
    font-size: var(--text-size-16);
  }
  @media screen and (max-width: 500px) {
    text-align: justify;
    letter-spacing: -0.085em;
  }
`;

const MinusIcon = styled(AiOutlineMinus)`
  @media screen and (max-width: 500px) {
    margin-right: 20px;
  }
`;
const PlusIcon = styled(AiOutlinePlus)`
  @media screen and (max-width: 500px) {
    margin-right: 20px;
  }
`;

const Accordion = () => {
  const accordiItemRef = useRef([]);
  const [itemHeight, setItemHeight] = useState([0]);
  const [itemVisible, setItemVisible] = useState('itemA');

  //! 아코디언 활성화
  const handleShowAccordion = (menu) => {
    if (menu === itemVisible) {
      setItemVisible('');
    } else {
      setItemVisible(menu);
    }
  };

  //! 아코디언 아이템 높이
  useEffect(() => {
    const heights = accordiItemRef.current.map((el) => el.scrollHeight);
    setItemHeight(heights);
  }, [itemVisible]);

  return (
    <AccordionContainer>
      <AccordionTitleBox onClick={() => handleShowAccordion('itemA')}>
        <AccordionTitle>정보</AccordionTitle>
        {itemVisible === 'itemA' ? <MinusIcon /> : <PlusIcon />}
      </AccordionTitleBox>
      <Linebar />
      <AccordionDescBox
        itemVisible={itemVisible === 'itemA'}
        height={itemHeight[0]}
        ref={(el) => (accordiItemRef.current[0] = el)}
      >
        <AccordionDesc>
          스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는 복합문화공간인
          인서리공원 내에 있는 스테이입니다. 광양 내 100년된 한옥을 리노베이션
          한 다경당, 근대시대에 있을 법한 공간으로 꾸며진 예린의 집, 한옥이 더
          이상 옛것이 아닌 현대의 펍한 공안으로 거듭난 홰경당이 있으며 더
          다양하고 아름다운 공간을 만들어 갈 계획을 가지고 있습니다.
        </AccordionDesc>
      </AccordionDescBox>
      <AccordionTitleBox onClick={() => handleShowAccordion('itemB')}>
        <AccordionTitle>주의사항</AccordionTitle>
        {itemVisible === 'itemB' ? <MinusIcon /> : <PlusIcon />}
      </AccordionTitleBox>
      <Linebar />
      <AccordionDescBox
        itemVisible={itemVisible === 'itemB'}
        height={itemHeight[1]}
        ref={(el) => (accordiItemRef.current[1] = el)}
      >
        <AccordionDesc>
          스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는 복합문화공간인
          인서리공원 내에 있는 스테이입니다. 광양 내 100년된 한옥을 리노베이션
          한 다경당....
        </AccordionDesc>
      </AccordionDescBox>
      <AccordionTitleBox onClick={() => handleShowAccordion('itemC')}>
        <AccordionTitle>어매니티</AccordionTitle>
        {itemVisible === 'itemC' ? <MinusIcon /> : <PlusIcon />}
      </AccordionTitleBox>
      <Linebar />
      <AccordionDescBox
        itemVisible={itemVisible === 'itemC'}
        height={itemHeight[2]}
        ref={(el) => (accordiItemRef.current[2] = el)}
      >
        <AccordionDesc>
          스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는 복합문화공간인
          인서리공원 내에 있는 스테이입니다. 광양 내 100년된 한옥을 리노베이션
          한 다경당, 근대시대에 있을 법한 공간으로 꾸며진 예린의 집, 한옥이 더
          이상 옛것이 아닌 현대의 펍한 ...
        </AccordionDesc>
      </AccordionDescBox>
      <AccordionTitleBox onClick={() => handleShowAccordion('itemD')}>
        <AccordionTitle>추가요금 안내</AccordionTitle>
        {itemVisible === 'itemD' ? <MinusIcon /> : <PlusIcon />}
      </AccordionTitleBox>
      <Linebar />
      <AccordionDescBox
        itemVisible={itemVisible === 'itemD'}
        height={itemHeight[3]}
        ref={(el) => (accordiItemRef.current[3] = el)}
      >
        <AccordionDesc>
          스테이 아트앤은 (주)아트앤라이프에서 기획하고 운영하는 복합문화공간인
          인서리공원 내에 있는 스테이입니다....
        </AccordionDesc>
      </AccordionDescBox>
    </AccordionContainer>
  );
};

export default Accordion;
