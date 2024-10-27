import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const Loading = () => {
  const { themeMode } = useContext(ThemeContext);
  return (
    <LoadingBackground themeMode={themeMode}>
      <LoadingOverlay>
        <Loader>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </Loader>
      </LoadingOverlay>
    </LoadingBackground>
  );
};

const Loader = styled.div`
  perspective: 1000px;

  span {
    display: inline-block; /* Ensure spans are inline-block for 3D effects */
    transform-origin: 50% 50% -25px;
    transform-style: preserve-3d;
    font-size: 30px;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    animation: loading05 1.6s infinite;

    /* Add animation delay to each span */
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
  background: ${({ themeMode }) =>
    themeMode === 'dark' ? '#393736' : 'rgba(237,246,252,255)'};
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
  background: radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.3), transparent 40%),
              radial-gradient(circle at 60% 80%, rgba(255, 0, 0, 0.3), transparent 40%),
              radial-gradient(circle at 0% 20%, rgba(0, 0, 255, 0.3), transparent 30%),
              radial-gradient(circle at 80% 100%, rgba(0, 0, 255, 0.3), transparent 30%),
              radial-gradient(circle at 40% 60%, rgba(0, 0, 255, 0.3), transparent 30%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const loadingKeyframes = `
@keyframes loading05 {
  0% {
    transform: rotateX(-360deg);
  }
  70% {
    transform: rotateX(0);
  }
}`;

export default Loading;
