import { keyframes } from '@mui/material/styles';

export const shake = `
  @keyframes shake {
    0% { transform: translate(-50%, -50%) rotate(0deg) translateY(20px) translateX(20px) scale(1.1); }
    25% { transform: translate(-50%, -50%) rotate(0deg) translateY(18px) translateX(18px) scale(1.1); }
    50% { transform: translate(-50%, -50%) rotate(0deg) translateY(22px) translateX(22px) scale(1.1); }
    75% { transform: translate(-50%, -50%) rotate(0deg) translateY(19px) translateX(19px) scale(1.1); }
    100% { transform: translate(-50%, -50%) rotate(0deg) translateY(20px) translateX(20px) scale(1.1); }
  }
  `;

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