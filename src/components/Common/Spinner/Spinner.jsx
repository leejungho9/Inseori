import React from 'react';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const SpinnerIcon = styled.div`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #e40177;
  border-bottom-color: #e40177;
  animation: spinner 0.8s ease infinite;
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <SpinnerIcon></SpinnerIcon>
    </SpinnerWrapper>
  );
};

export default Spinner;
