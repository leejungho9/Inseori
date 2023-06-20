import styled from 'styled-components';
const SearchbarInput = styled.input`
  width: 100%;
  height: inherit;
  background-color: #f6f6f6;
  border-radius: 28px;
  outline: none;
  border: none;
  padding: 5px 20px;
  padding-right: ${({ paddingRight }) => paddingRight && paddingRight + 'px'};
  font-size: var(--text-size-14);
  font-family: 'PretendardRegular';
`;

const Searchbar = ({ paddingRight }) => {
  return (
    <SearchbarInput
      placeholder="검색어를 입력해주세요."
      paddingRight={paddingRight}
    />
  );
};

export default Searchbar;
