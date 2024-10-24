import React, { useEffect, useRef } from 'react';
import { styled, Box } from '@mui/material';
import { NameTypography, SecondTypography, ThirdTypography, StyledContainer, StyledBox, BoxForPic, ImageBox, StyledButton } from '../pages/About'; 
import { useTranslation } from 'react-i18next';
import lightPhoneImage from '../assets/light-phone.png';
import darkPhoneImage from '../assets/dark-phone.png';
import { ReactComponent as AddUserIcon } from '../assets/add-user.svg';


const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative', // Make sure the container is relatively positioned
  backgroundColor: theme.palette.background.default,
  background: `radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 60% 80%, rgba(255, 0, 0, 0.3), transparent 40%),
               radial-gradient(circle at 0% 20%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 80% 100%, rgba(0, 0, 255, 0.3), transparent 30%),
               radial-gradient(circle at 40% 60%, rgba(0, 0, 255, 0.3), transparent 30%)`,
  backdropFilter: 'blur(15px)',
  textAlign: 'center',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem 0',
}));

const Hero = ({ themeMode }) => {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
  
    let width, height, stars = [], shootingStars = [];
    const layers = [
      { speed: 0.135, scale: 0.2, count: 520 },
      { speed: 0.1, scale: 0.5, count: 100 },
      { speed: 0.2, scale: 0.75, count: 60 }
    ];
    const starsAngle = 145;
    const shootingStarSpeed = { min: 15, max: 20 };
    const shootingStarOpacityDelta = 0.01;
    const trailLengthDelta = 0.01;
    const shootingStarEmittingInterval = 2000;
    const shootingStarLifeTime = 500;
    const maxTrailLength = 300;
    const starBaseRadius = 2;
    const shootingStarRadius = 3;
    let paused = false;
  
    function start() {
      resizeCanvas();
      createStars();
      update();
      setInterval(() => {
        if (!paused) {
          createShootingStar();
        }
      }, shootingStarEmittingInterval);
  
      window.onfocus = () => { paused = false; };
      window.onblur = () => { paused = true; };
      window.addEventListener('resize', resizeCanvas);
    }
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = canvas.width;
      height = canvas.height;
      resetStars();
    }
  
    function createStars() {
      stars = [];
      for (let j = 0; j < layers.length; j++) {
        const layer = layers[j];
        for (let i = 0; i < layer.count; i++) {
          const star = particle.create(randomRange(0, width), randomRange(0, height), 0, 0);
          star.radius = starBaseRadius * layer.scale;
          star.setSpeed(layer.speed);
          star.setHeading(degreesToRads(starsAngle));
          stars.push(star);
        }
      }
    }
  
    const particle = {
      create(x, y, speed, direction) {
        return {
          x,
          y,
          speed,
          direction,
          radius: 0,
          opacity: 0,
          trailLengthDelta: 0,
          isSpawning: true,
          isDying: false,
          isDead: false,
          setSpeed(newSpeed) {
            this.speed = newSpeed;
          },
          setHeading(angle) {
            this.direction = angle;
          },
          update() {
            this.x += Math.cos(this.direction) * this.speed;
            this.y += Math.sin(this.direction) * this.speed;
          },
          getHeading() {
            return this.direction;
          }
        };
      }
    };
  
    function update() {
      if (!paused) {
        context.clearRect(0, 0, width, height);
  
        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          star.update();
          drawStar(star);
          if (star.x > width) star.x = 0;
          if (star.x < 0) star.x = width;
          if (star.y > height) star.y = 0;
          if (star.y < 0) star.y = height;
        }
  
        for (let i = 0; i < shootingStars.length; i++) {
          const shootingStar = shootingStars[i];
  
          // Manage opacity and life of shooting stars
          if (shootingStar.isSpawning) {
            shootingStar.opacity += shootingStarOpacityDelta;
            if (shootingStar.opacity >= 1) {
              shootingStar.isSpawning = false;
              killShootingStar(shootingStar);
            }
          } else if (shootingStar.isDying) {
            shootingStar.opacity -= shootingStarOpacityDelta;
            if (shootingStar.opacity <= 0) {
              shootingStar.isDying = false;
              shootingStar.isDead = true;
            }
          }
          shootingStar.trailLengthDelta += trailLengthDelta;
          shootingStar.update();
          drawShootingStar(shootingStar);
        }
  
        shootingStars = shootingStars.filter(star => !star.isDead);
        requestAnimationFrame(update);
      }
    }
  
    function drawStar(star) {
      context.fillStyle = 'rgb(255, 221, 157)';
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
      context.fill();
    }
  
    function drawShootingStar(p) {
      const x = p.x, y = p.y, currentTrailLength = maxTrailLength * p.trailLengthDelta;
      const pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());
  
      context.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      context.beginPath();
      context.moveTo(x - 1, y + 1);
      context.lineTo(pos.x, pos.y);
      context.closePath();
      context.fill();
    }
  
    function createShootingStar() {
      const shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
      shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
      shootingStar.setHeading(degreesToRads(starsAngle));
      shootingStars.push(shootingStar);
    }
  
    function drawShootingStar(p) {
        const x = p.x;
        const y = p.y;
        const currentTrailLength = maxTrailLength * p.trailLengthDelta;
        const pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());
    
        // Draw the shooting star shape
        context.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
        const starLength = 5;
        context.beginPath();
        context.moveTo(x - 1, y + 1);
        context.lineTo(x, y + starLength);
        context.lineTo(x + 1, y + 1);
        context.lineTo(x + starLength, y);
        context.lineTo(x + 1, y - 1);
        context.lineTo(x, y + 1);
        context.lineTo(x, y - starLength);
        context.lineTo(x - 1, y - 1);
        context.lineTo(x - starLength, y);
        context.lineTo(x - 1, y + 1);
        context.lineTo(x - starLength, y);
        context.closePath();
        context.fill();
    
        // Draw the trail of the shooting star
        context.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
        context.beginPath();
        context.moveTo(x - 1, y - 1);
        context.lineTo(pos.x, pos.y);
        context.lineTo(x + 1, y + 1);
        context.closePath();
        context.fill();
    }
    
    function killShootingStar(shootingStar) {
      setTimeout(() => {
        shootingStar.isDying = true;
      }, shootingStarLifeTime);
    }
  
    function lineToAngle(x1, y1, length, radians) {
      const x2 = x1 + length * Math.cos(radians);
      const y2 = y1 + length * Math.sin(radians);
      return { x: x2, y: y2 };
    }
  
    function resetStars() {
      createStars();
    }
  
    function randomRange(min, max) {
      return min + Math.random() * (max - min);
    }
  
    function degreesToRads(degrees) {
      return degrees / 180 * Math.PI;
    }
  
    start();
  
    // return () => {
    //   window.removeEventListener('resize', resizeCanvas);
    // };
  }, []);
  

  return (
    <HeroSection id="about-hero">
      <StyledContainer className='custom-container'>
        <StyledBox>
          <NameTypography variant="h1">
            {t('aboutPage.name')}
          </NameTypography>
          <SecondTypography variant="h3">
            {t('aboutPage.jobTitle')}
          </SecondTypography>
          <ThirdTypography variant="body1">
            {t('aboutPage.description')}
          </ThirdTypography>
        </StyledBox>
        <BoxForPic>
          <ImageBox component="img" src={themeMode === 'dark' ? darkPhoneImage : lightPhoneImage} alt="Phone" />
          <StyledButton href="https://www.linkedin.com/in/gabrielė-tamaševičiūtė-06712526b" target="_blank" rel="noopener noreferrer">
            <AddUserIcon /> Connect
          </StyledButton>
        </BoxForPic>
      </StyledContainer>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0,
 width: '100%', height: '100%' }} />
    </HeroSection>
  );
};

export default Hero;
