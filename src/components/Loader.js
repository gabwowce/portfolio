// Loader.js
import React from 'react';
import styled from 'styled-components';

const Loader = ({ color = '#000', size = '40px' }) => {
  return (
    <LoaderContainer size={size}>
      <SVGLoader viewBox="0 0 50 50" color={color}>
        <path
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </SVGLoader>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;  /* Įsitikinkite, kad užima visą aukštį */
  width: 100%;   /* Užpildykite visą plotį */
`;

const SVGLoader = styled.svg`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  fill: ${(props) => props.color};
`;

export default Loader;
