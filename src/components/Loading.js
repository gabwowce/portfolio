import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const Loading = () => {
  // const { themeMode } = useContext(ThemeContext);
  return (
    <LoadingBackground >
      <LoadingOverlay>
        <Loader>
          {/* <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span> */}
        </Loader>
      </LoadingOverlay>
    </LoadingBackground>
  );
};

// Define keyframes for loading animation
const loadingAnimation = keyframes`
  0% {
    transform: rotateX(-360deg);
  }
  70% {
    transform: rotateX(0);
  }
`;

const Loader = styled.div`
  perspective: 1000px;

  span {
    display: inline-block;
    transform-origin: 50% 50% -25px;
    transform-style: preserve-3d;
    font-size: 30px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    animation: ${loadingAnimation} 1.6s infinite;

    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.1s; }
    &:nth-child(3) { animation-delay: 0.2s; }
    &:nth-child(4) { animation-delay: 0.3s; }
    &:nth-child(5) { animation-delay: 0.4s; }
    &:nth-child(6) { animation-delay: 0.5s; }
    &:nth-child(7) { animation-delay: 0.6s; }
  }
`;

const LoadingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 'back';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export default Loading;
