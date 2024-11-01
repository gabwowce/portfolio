import React from 'react';
import cloud from '../assets/cloudOne.png'; 

const CanvasComponentLight = ({ cloudAnimation, birdAnimation}) => {
  return (
    <div>
      <style>
        {`
          canvas {
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
          }
          @keyframes anim {
            from {
              transform: translateX(200%);
            }
            to {
              transform: translateX(-200%);
            }
          }
          @keyframes anime {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-200%);
            }
          }
          .c1,
          .c2 {
            width: 1200px;
            height: 1000px;
            position: absolute;
            background: transparent url(${cloud}) 0 0 no-repeat;
            background-size: 100%;
            z-index: 0;
          }
          .c1.one,
          .c2.one { top: -400px; left: -100px; }
          .c1.two,
          .c2.two { top: 200px; left: 500px; }
          .c1.three,
          .c2.three { top: 400px; right: 50px; }
          .c1.four,
          .c2.four { top: -180px; right: 0px; }
          .c2 .one { top: -209px; }
          @media (max-width: 1023px) {
            .c2.one { left: -80px; }
            .c2.two { left: -120px; }
            .c2.three { right: 220px; }
            .c2.four { right: 220px; }
          }
          .c1 { animation: ${cloudAnimation ? 'anime' : 'none'} 600s linear infinite forwards; }
          .c2 { transform: translateX(200%); animation: ${cloudAnimation ? 'anim' : 'none'} 600s linear infinite forwards; }

          /* Bird styles */
          .bird {
            background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg');
            filter: invert(34%) sepia(55%) saturate(227%) hue-rotate(170deg) brightness(93%) contrast(91%);
            background-size: auto 100%;
            width: 88px;
            height: 125px;
            will-change: background-position;
            animation-name: fly-cycle;
            animation-timing-function: steps(10);
            animation-iteration-count: infinite;
          }

          .bird-one { animation-duration: 1s; animation-delay: -0.5s; }
          .bird-two { animation-duration: 0.9s; animation-delay: -0.75s; }
          .bird-three { animation-duration: 1.25s; animation-delay: -0.25s; }
          .bird-four { animation-duration: 1.1s; animation-delay: -0.5s; }

          .bird-container {
            position: absolute;
            
            left: -3%;
            transform: scale(0) translateX(-10vw);
            will-change: transform;
            
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .bird-container-one {top: 10%; animation-duration: 25s; animation-delay: 0; animation-name: fly-right-one ;}
          .bird-container-two {top: 20%; animation-duration: 26s; animation-delay: 1s; animation-name: fly-right-one ;}
          .bird-container-three {top: 70%; animation-duration: 24.6s; animation-delay: 9.5s; animation-name: fly-down-to-up ;}
          .bird-container-four {top: 80%; animation-duration: 26s; animation-delay: 16.5s; animation-name: fly-down-to-up ;}

          @keyframes fly-cycle {
            100% { background-position: -900px 0; }
          }

          @keyframes fly-down-to-up {
            0% { transform: scale(0.3) translateX(0vw) translateY(0); }
            5% { transform: translateY(-2vh) translateX(5vw) scale(0.3); }
            10% { transform: translateY(-1.5vh) translateX(10vw) scale(0.3); }
            15% { transform: translateY(-2.5vh) translateX(15vw) scale(0.3); }
            20% { transform: translateY(-3.5vh) translateX(20vw) scale(0.4); }
            25% { transform: translateY(-3vh) translateX(25vw) scale(0.4); }
            30% { transform: translateY(-5vh) translateX(30vw) scale(0.5); }
            35% { transform: translateY(-4.5vh) translateX(35vw) scale(0.55); }
            40% { transform: translateY(-6vh) translateX(40vw) scale(0.5); }
            45% { transform: translateY(-5.8vh) translateX(45vw) scale(0.55); }
            50% { transform: translateY(-7vh) translateX(50vw) scale(0.5); }
            55% { transform: translateY(-8vh) translateX(55vw) scale(0.5); }
            60% { transform: translateY(-9vh) translateX(60vw) scale(0.55); }
            70% { transform: translateY(-10vh) translateX(70vw) scale(0.55); }
            80% { transform: translateY(-11vh) translateX(80vw) scale(0.5); }
            90% { transform: translateY(-12vh) translateX(90vw) scale(0.55); }
            95% { transform: translateY(-12.5vh) translateX(95vw) scale(0.5); }
            100% { transform: translateY(-13vh) translateX(105vw) scale(0.5); }
        }

          @keyframes fly-right-one {
            0% { transform: scale(0.3) translateX(-10vw); }
            10% { transform: translateY(2vh) translateX(10vw) scale(0.4); }
            20% { transform: translateY(0vh) translateX(30vw) scale(0.5); }
            30% { transform: translateY(4vh) translateX(50vw) scale(0.6); }
            40% { transform: translateY(2vh) translateX(70vw) scale(0.6); }
            50% { transform: translateY(0vh) translateX(90vw) scale(0.6); }
            60% { transform: translateY(0vh) translateX(110vw) scale(0.6); }
            100% { transform: translateY(0vh) translateX(110vw) scale(0.6); }
          }

          @keyframes fly-right-two {
	
            0% {transform: translateY(-2vh) translateX(-10vw) scale(0.5);}
            10% {transform: translateY(0vh) translateX(10vw) scale(0.4);}
            20% {transform: translateY(-4vh) translateX(30vw) scale(0.6);} 
            30% {transform: translateY(-1vh) translateX(50vw) scale(0.45);}
            40% {transform: translateY(-2.5vh) translateX(60vw) scale(0.5);}
            50% {transform: translateY(-1.5vh) translateX(80vw) scale(0.45);}
            51% {transform: translateY(-4.5vh) translateX(85vw) scale(0.45);}
            100% {transform: translateY(-5.5vh) translateX(110vw) scale(0.45);}
            
        }

          
        `}
      </style>
      
      <div className="sky" style={{ overflow: 'hidden'}}>
        <div className="clouds">
          <div className="c1 one"></div>
          <div className="c1 two"></div>
          <div className="c1 three"></div>
          <div className="c2 one"></div>
          <div className="c2 two"></div>
          <div className="c2 three"></div>
        </div>

        {/* Bird Elements */}
        {birdAnimation ? (
          <>
            <div className="bird-container bird-container-one">
              <div className="bird bird-one"></div>
            </div>
            <div className="bird-container bird-container-two">
              <div className="bird bird-two"></div>
            </div>
            <div className="bird-container bird-container-three">
              <div className="bird bird-three"></div>
            </div>
            <div className="bird-container bird-container-four">
              <div className="bird bird-four"></div>
            </div>
          </>
        ) : <></>}
      </div>
    </div>
  );
};

export default CanvasComponentLight;
