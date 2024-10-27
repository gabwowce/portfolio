// Loading.js
import React from 'react';

const Loading = () => {
  return (
    <>
      <style>
        {`
          .loading-overlay {
            position: fixed; /* Fiksuota pozicija */
            top: 0;
            left: 0;
            width: 100%; /* Užpildykite visą plotį */
            height: 100%; /* Užpildykite visą aukštį */
            background: rgba(255, 255, 255, 0.7); /* Pusiau permatomas fonas */
            display: flex; /* Centruokite turinį */
            justify-content: center; /* Horizontalus centravimas */
            align-items: center; /* Vertikalus centravimas */
            z-index: 9999; /* Užtikrinkite, kad jis būtų viršuje */
          }

          .loading-spinner {
            font-size: 2em; /* Sukimo stiliai */
          }
        `}
      </style>
      <div className="loading-overlay">
        <div className="loading-spinner"> {/* Čia galite pridėti savo sukimosi animaciją */} 
          Loading...
        </div>
      </div>
    </>
  );
};

export default Loading;
