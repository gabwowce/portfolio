// LoaderComponent.js
import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const LoaderComponent = () => (
  <LoaderContainer>
    <Loader color="#3498db" size="50px" /> 
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh; /* Uždengia visą ekraną */
  width: 100%; /* Uždengia visą plotą */
  background: rgba(255, 255, 255, 0.8); /* Pasirinktinė fono spalva */
`;

export default LoaderComponent;
