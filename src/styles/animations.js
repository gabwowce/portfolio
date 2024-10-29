import { keyframes } from '@mui/material/styles';

export const slideDownAnimation= keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideUpAnimation= keyframes`
  from{
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


export const slideInRightAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideToolsInAnimation = keyframes`
  0% {
    transform: translateX(500%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;


export const slideInLeftAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
 to {
    transform: translateX(0);
    opacity: 1;
  }
`;



export const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


// export const fadeInLoading = keyframes`
//   0% {
//     opacity: 0;
//   }
//   90%{
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;