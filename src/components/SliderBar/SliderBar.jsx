/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { useState, useEffect } from "react";
import "./SliderBar.css";
import styles from "./SliderBar.module.css"

const SliderBar = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [timerProgress, setTimerProgress] = useState(0);
  const slidesURL = [
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/12/healthy-eating-food-diet-ingredients-1296x728-header.jpg?w=1155&h=1528",
    "https://i.guim.co.uk/img/media/3cfd4dc25e5f1dbc378ab3adc817a1081264a5df/0_224_6720_4032/master/6720.jpg?width=1200&quality=85&auto=format&fit=max&s=bfddf46befeefd7c1067ed095b9a9e87",
    "https://images.wsj.net/im-121422",
    "https://images.ctfassets.net/cnu0m8re1exe/4aHzyKC8KlqHTFYe8FRvlD/ad5e91ff751c0e92d6fee54a231279da/smellingfood.jpg",
    "https://media.30seconds.com/tip/lg/Submit-Your-Recipes-to-30Seconds-How-to-Share-Your-Favorit-21089-4faef85b07-1616429902.jpg"
  ]
  const context = {
    header: [
      "VRecipes is #1 Recipe Source Site in Türkiye",
      "Delicious Meals From All Over the World",
      "Is Recipe Card Wrong?",
      "Want to Add Recipes to Favorites?",
      "Site is still in development..."],
    description: [
      "Find and share everyday cooking inspiration on VRecipes",
      "You can contribute recipes by logging into the site",
      "Click on Edit Button to update it!",
      "We have that feature covered already ^^",
      "More features and reworks are on the way :)"],
  } 

  const handleNextSlide = () => {
      slideNumber !== 5 ? 
      setSlideNumber((prevSlideNumber) => prevSlideNumber += 1) 
      : 
      setSlideNumber((prevSlideNumber) => prevSlideNumber = 1)
  }
  const handlePreviousSlide = () => {
      slideNumber !== 1 ? 
      setSlideNumber((prevSlideNumber) => prevSlideNumber -= 1) 
      : 
      setSlideNumber((prevSlideNumber) => prevSlideNumber = 5)
  }

  const handleButtonClick = (slideIndex) => {
    setSlideNumber(slideIndex);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlay(true);
  };

  useEffect(() => {
    let sliderInterval;

    if (isAutoPlay) {
      sliderInterval = setInterval(() => {
        setTimerProgress((prevProgress) => {
          if (prevProgress === 100) {
            handleNextSlide();
            return 0;
          }
          return prevProgress + 0.5;
        });
      }, 35); // New slide for every 8 seconds
    } else {
      clearInterval(sliderInterval);
    }

    return () => clearInterval(sliderInterval);
  }, [isAutoPlay, slideNumber, handleNextSlide]);

  return (
    <>
    <div className={styles['slider']} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles['slide-content']}>
        <div className={styles['slide-image']} style={{ backgroundImage: `url(${slidesURL[slideNumber-1]})` }}>
          <div className={styles['slide-number']}>{slideNumber}/{slidesURL.length}</div>
            <div className={styles['slide-text']}>
              <div className={styles['slide-text-header']}>
                <h1>{context.header[slideNumber-1]}</h1>
              </div>
              <div className={styles['slide-text-description']}>
                <h3>{context.description[slideNumber-1]}</h3>
              </div>
            </div>
        </div>
      </div>
      <div className={styles['slide-progress-bar']} style={{ width: `${timerProgress}%` }}></div>
      <span className={styles['slide-left-arrow']} onClick={handlePreviousSlide}>&#10094;</span>
      <span className={styles['slide-right-arrow']} onClick={handleNextSlide}>&#10095;</span>
    </div>
    <div className={styles['slide-buttons']}>
          {slidesURL.map((slide, slideIndex) => (
            <span key={slideIndex} className={slideIndex === (slideNumber-1) ? "slide active" : ""} onClick={() => handleButtonClick(slideIndex+1)}></span>
          ))
          }
    </div>
    </>
  );
};

export default SliderBar;