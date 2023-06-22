import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const PaginationContainer = styled.div``;

const NumberButton = styled.button`
  font-family: 'PretendardRegular';
  font-size: 18px;
  border: none;
  background-color: white;
  padding: 0 9px;
  cursor: pointer;
`;

const Pagination = () => {
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <PaginationContainer>
      <PrevButton />
      {pageNumbers.map((num) => (
        <NumberButton key={num}>{num}</NumberButton>
      ))}
      <NextButton />
    </PaginationContainer>
  );
};

const PrevButton = () => {
  return <AiOutlineLeft />;
};

const NextButton = () => {
  return <AiOutlineRight />;
};
export default Pagination;
