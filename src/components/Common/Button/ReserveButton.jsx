import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowFlex } from 'styles/GlobalStyle';

const ReserveLinkBtn = styled(Link)`
  border: 1px solid var(--gray);
  font-weight: bold;
  width: 100%;
  height: 40px;
  border-radius: 30px;
  ${RowFlex}
  align-items: center;
  font-size: var(--text-size-16);
  color: var(--gray);
`;

const ReserveSubmitBtn = styled.button`
  border: 1px solid var(--gray);
  border-radius: 30px;
  background-color: white;
  font-weight: bold;
  width: 100%;
  height: 40px;
  ${RowFlex}
  align-items: center;
  font-size: var(--text-size-16);
  color: var(--gray);
`;
function ReserveButton({ children, url, link = true }) {
  return link ? (
    <ReserveLinkBtn to={url}>{children}</ReserveLinkBtn>
  ) : (
    <ReserveSubmitBtn>{children}</ReserveSubmitBtn>
  );
}

export default ReserveButton;
