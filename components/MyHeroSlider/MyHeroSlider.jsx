import React, { useRef } from 'react';
import HeroSlider, { Slide, MenuNav, Overlay } from 'hero-slider';
import dc from '../../pictures/dc.webp';
import alexandria from '../../pictures/alexandria.webp';
import uspto from '../../pictures/uspto.webp';
import 'hero-slider/dist/index.css';
import './MyHeroSlider.css';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Wrapper from '../Wrapper';

const MyHeroSlider = () => {
  const goToNextSlideRef = useRef(null);
  const goToPreviousSlideRef = useRef(null);

  const handleBeforeSliding = (previousSlide, nextSlide) => {
    console.debug(
      "onBeforeSliding(previousSlide, nextSlide): ",
      previousSlide,
      nextSlide
    );

    const totalSlides = 3;
    if (nextSlide >= totalSlides) {
      setTimeout(() => {
        if (goToNextSlideRef.current) {
          goToNextSlideRef.current(0);
        }
      }, 100);
    } else if (nextSlide < 0) {
      setTimeout(() => {
        if (goToPreviousSlideRef.current) {
          goToPreviousSlideRef.current(totalSlides - 1);
        }
      }, 100);
    }
  };

  return (
    <HeroSlider
      className="hero-slider"
      height="100vh"
      autoplay={{
        autoplayDuration: 8000,
        autoplayDebounce: 4000,
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: handleBeforeSliding,
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
        goToNextSlidePointer: goToNextSlideRef,
        goToPreviousSlidePointer: goToPreviousSlideRef,
      }}
      accessibility={{
        orientation: 'horizontal',
        shouldDisplayButtons: true,
      }}
      animations={{
        slidingAnimation: 'fade',
      }}
    >
      <Slide
        shouldRenderMask
        label="Washington, D.C."
        background={{
          backgroundImageSrc: dc,
          backgroundAnimation: 'zoom', // Add zoom animation
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>Experienced</Title>
            <Subtitle>Top TradeMark Registration 2023</Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        shouldRenderMask
        label="Alexandria"
        background={{
          backgroundImageSrc: alexandria,
          backgroundAnimation: 'zoom', // Add zoom animation
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>Experienced</Title>
            <Subtitle>Trusted Advisors for Over 50 Years</Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <Slide
        shouldRenderMask
        label="USPTO"
        background={{
          backgroundImageSrc: uspto,
          backgroundAnimation: 'zoom', // Add zoom animation
        }}
      >
        <Overlay>
          <Wrapper>
            <Title>Global Reach</Title>
            <Subtitle>International Patent Services</Subtitle>
          </Wrapper>
        </Overlay>
      </Slide>

      <MenuNav />
    </HeroSlider>
  );
};

export default MyHeroSlider;