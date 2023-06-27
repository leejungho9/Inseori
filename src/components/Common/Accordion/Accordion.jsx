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

const Accordion = ({ items }) => {
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
  }, [items, itemVisible]);

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
        <AccordionDesc>{items.information}</AccordionDesc>
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
        <AccordionDesc>{items.caution}</AccordionDesc>
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
        <AccordionDesc>{items.amedity}</AccordionDesc>
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
        <AccordionDesc>{items.subcharge}</AccordionDesc>
      </AccordionDescBox>
    </AccordionContainer>
  );
};

export default Accordion;
