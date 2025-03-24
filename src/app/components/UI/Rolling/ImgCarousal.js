'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// Simple shapes with different proportions
const SHAPES = [
  'shape-1', // Tall portrait
  'shape-2', // Medium portrait
  'shape-3', // Landscape
  'shape-4', // Narrow portrait
];

const InfiniteShapeCarousel = ({
  images,
  speed = 30, // Animation duration in seconds
  gap = 20, // Gap between images in pixels
  minImages = 10 // Minimum copies to ensure seamless scrolling
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [carouselItems, setCarouselItems] = useState([]);
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !trackRef.current || !images || images.length === 0) return;

      const containerWidth = containerRef.current.clientWidth;
      const isMobile = window.innerWidth <= 480;
      const isTablet = window.innerWidth <= 768 && window.innerWidth > 480;

      // Base number of copies
      let baseCopies = isMobile ? 6 : isTablet ? 8 : minImages;

      // Calculate the average width of an image (using shape-2 as a rough average)
      const avgImageWidth = isMobile ? 128 : isTablet ? 240 : 400; // From your CSS
      const totalGapWidth = gap * (baseCopies - 1);
      const estimatedTrackWidth = (avgImageWidth * baseCopies) + totalGapWidth;

      // Ensure the track is at least 2x the container width for seamless looping
      const minRequiredWidth = containerWidth * 2;
      let copies = Math.max(
        baseCopies,
        Math.ceil(minRequiredWidth / (avgImageWidth + gap)) // Dynamically adjust copies
      );

      // Ensure at least 2 sets for looping
      copies = Math.max(copies, 2);

      // Create duplicated items with sequential shapes
      const items = Array(copies).fill([...images]).flat().map((img, index) => {
        const shapeIndex = index % SHAPES.length;
        return {
          ...img,
          id: `${img.id || img.src}-${index}`,
          shape: SHAPES[shapeIndex],
        };
      });

      setCarouselItems(items);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, speed, gap, minImages]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className={styles.carouselContainer} ref={containerRef}>
      <div
        className={`${styles.carouselTrack} ${isHovering ? styles.paused : ''}`}
        style={{
          '--animation-duration': `${speed}s`,
          '--gap': `${gap}px`,
        }}
        ref={trackRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {carouselItems.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.imageWrapper} ${styles[image.shape]}`}
          >
            <Image
              src={image.src}
              alt={image.alt || `Carousel image ${index}`}
              width={image.width || 400}
              height={image.height || 500}
              className={styles.carouselImage}
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteShapeCarousel;