import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowFlex } from '../../styles/GlobalStyle';
const ReserveBtn = styled(Link)`
  border: 1px solid black;
  font-weight: bold;
  width: 120px;
  height: 45px;
  border-radius: 30px;
  ${RowFlex}
  align-items: center;
  font-size: 20px;
`;
function ReserveButton({ children, url }) {
  return <ReserveBtn to={url}>{children}</ReserveBtn>;
}

export default ReserveButton;
