import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowFlex } from 'styles/GlobalStyle';

const ReserveLinkBtn = styled(Link)`
  border: 2px solid var(--gray);
  width: 100%;
  height: 100%;
  border-radius: 30px;
  ${RowFlex}
  align-items: center;
  font-size: var(--text-size-16);
  color: var(--gray);
  font-family: 'PretendardSemiBold';
  font-weight: bold;

  @media screen and (max-width: 500px) {
    border: 1px solid var(--gray);
  }
`;

const ReserveSubmitBtn = styled.button`
  border: 1px solid var(--gray);
  border-radius: 30px;
  background-color: white;
  width: 100%;
  height: 40px;
  ${RowFlex}
  align-items: center;
  font-size: var(--text-size-16);
  color: var(--gray);
  font-family: 'PretendardSemiBold';
  font-weight: bold;

  @media screen and (max-width: 500px) {
    border: 1px solid var(--gray);
  }
`;
function ReserveButton({ children, url, link = true }) {
  return link ? (
    <ReserveLinkBtn to={url}>{children}</ReserveLinkBtn>
  ) : (
    <ReserveSubmitBtn>{children}</ReserveSubmitBtn>
  );
}

export default ReserveButton;
