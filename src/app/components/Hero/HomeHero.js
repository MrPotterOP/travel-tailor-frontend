'use client'
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';
import styles from './styles.module.css';

import Button from '../UI/Button/Button';
import ArrowBtn from '../UI/Button/ArrowBtn';

import Varients from '../../lib/varients';

function HomeHero({ heroData }) {

  // Default hero data if none provided
  // heroData = [
  //   {
  //     "id": 1,
  //     "title": "A Spiritual Experience of The Himalayas",
  //     "description": "Hike through the foothills of the Himalayas and embrace the spirituality of Northern India.",
  //     "imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
  //     "url": "/destinations/maldives"
  //   },
  //   {
  //     "id": 2,
  //     "title": "A Spiritual Experience of The Himalayas 2",
  //     "description": "Hike through the foothills of the Himalayas and embrace the spirituality of Northern India.2",
  //     "imgUrl": "/uploads/beautiful_picture_b7d7a198b7.jpeg",
  //     "url": "/tours/inca-trail-to-machu-picchu-trek"
  //   },
  //   {
  //     "id": 3,
  //     "title": "A Spiritual Experience of The Himalayas 3",
  //     "description": "Hike through the foothills of the Himalayas and embrace the spirituality of Northern India.3",
  //     "imgUrl": "/uploads/evgeni_tcherkasski_FET_2_QY_Dj_DXE_unsplash_743b4d9b52.jpg",
  //     "url": "/destinations/machu-picchu"
  //   }
  // ];
  

  const [current, setCurrent] = useState(0);
  const [hero, setHero] = useState(heroData[0]);
  const imagesPreloaded = useRef(false);

  const handleClick = (index) => {
    setCurrent(index);
    setHero(heroData[index]);
  };

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (current + 1) % heroData.length;
      handleClick(nextIndex);
    }, 7000);
    return () => clearTimeout(timer);
  }, [current, heroData]);

  // Preload images only once when component mounts
  useEffect(() => {
    if (!imagesPreloaded.current) {
      heroData.forEach((item) => {
        const img = document.createElement('link');
        img.rel = 'preload';
        img.as = 'image';
        img.href = `${process.env.NEXT_PUBLIC_URL_PREFIX}${item.imgUrl}`;
        document.head.appendChild(img);
      });
      imagesPreloaded.current = true;
    }
  }, []);

  // Background style for persistent black background
  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    zIndex: -3
  };

  const Hero = () => {
    return (
      <div className={styles.heroHome}>
        {/* Persistent black background */}
        <div style={backgroundStyle}></div>
        
        {/* BgImage with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.heroHomeImgContainer}
            key={hero.imgUrl}
            initial={{ opacity: 0, filter: 'brightness(0.2)' }}
            animate={{ opacity: 1, filter: 'brightness(0.8)' }}
            exit={{ opacity: 0, filter: 'brightness(0.2)' }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_URL_PREFIX}${hero.imgUrl}`}
              alt={hero.title}
              width={1400}
              height={1000}
              className={styles.heroHomeImg}
              priority={true}
            />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className={styles.heroHomeContent}>
          <AnimatePresence mode="wait">
            <motion.div
              className={styles.heroHomeContentMain}
              key={hero.title}
              variants={Varients.heroHomeContentMain}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className={styles.heroHomeContentMainTitle}>
                <motion.h1 variants={Varients.heroHomeContentChild}>
                  {hero.title}
                </motion.h1>
                <motion.p variants={Varients.heroHomeContentChild}>
                  {hero.description}
                </motion.p>
              </div>

              <motion.div variants={Varients.heroHomeContentChildFinal}>
                <Button url={hero.url} className='md'>Explore</Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <div className={styles.heroHomeNav}>
            <div className={styles.progressBars}>
              {heroData.map((item, index) => (
                <div
                  key={index}
                  className={styles.progressBar}
                  onClick={() => handleClick(index)}
                >
                  <div
                    key={item.title}
                    className={`${styles.progress} ${
                      current === index ? styles.active : ''
                    } ${current > index ? styles.filled : ''}`}
                  ></div>
                </div>
              ))}
            </div>

            <div className={styles.scrollIndicator}>
              <ArrowBtn label="Scroll" direction="down" variant="blurred" />
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <>
      {heroData ? (<Hero />) : (<></>)}
    </>
  );
}

export default HomeHero;