'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

// Shape definitions with different aspect ratios
const SHAPES = [
  'shape-1', // Tall portrait
  'shape-2', // Medium portrait
  'shape-3', // Landscape
  'shape-4', // Narrow portrait
];

/**
 * InfiniteShapeCarousel - A truly seamless infinite scrolling image carousel
 * 
 * @param {Object} props
 * @param {Array} props.images - Array of image objects with src, alt, width, height, id
 * @param {number} [props.speed=300] - Animation duration in seconds
 * @param {number} [props.gap=20] - Gap between images in pixels
 * @param {number} [props.minImages=10] - Minimum number of images to ensure seamless scrolling
 */
const InfiniteShapeCarousel = ({
  images = [],
  speed = 300,
  gap = 20,
  minImages = 10
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [isDuplicating, setIsDuplicating] = useState(false);
  
  // Calculate a single set of carousel items (one complete cycle)
  const baseCarouselItems = useMemo(() => {
    if (!images || images.length === 0) return [];
    
    return images.map((img, index) => ({
      ...img,
      id: `${img.id || img.src}-base-${index}`,
      shape: SHAPES[index % SHAPES.length],
    }));
  }, [images]);
  
  // Calculate the actual number of duplicates needed for a seamless loop
  const [carouselItems, setCarouselItems] = useState([]);
  
  // Measure elements and determine required number of sets
  useEffect(() => {
    if (!baseCarouselItems.length || !containerRef.current) return;
    
    const calculateSizes = () => {
      if (!containerRef.current) return;
      
      const newContainerWidth = containerRef.current.offsetWidth;
      setContainerWidth(newContainerWidth);
      
      // Set a flag to avoid animation during duplication
      setIsDuplicating(true);
      
      // We'll measure after rendering the base set
      setTimeout(() => {
        if (!trackRef.current) return;
        
        const baseTrackWidth = trackRef.current.scrollWidth;
        setTrackWidth(baseTrackWidth);
        
        // Calculate how many sets we need to fill at least 2x container width
        // to ensure a seamless loop without visual gaps
        const setsNeeded = Math.max(
          3, // minimum 3 sets for safety
          Math.ceil((newContainerWidth * 2) / baseTrackWidth)
        );
        
        // Create the duplicated items
        const duplicatedItems = [];
        for (let i = 0; i < setsNeeded; i++) {
          duplicatedItems.push(
            ...baseCarouselItems.map((item, index) => ({
              ...item,
              id: `${item.id.split('-base-')[0]}-${i}-${index}`,
            }))
          );
        }
        
        setCarouselItems(duplicatedItems);
        
        // Resume animation after a brief delay
        setTimeout(() => {
          setIsDuplicating(false);
        }, 50);
      }, 50);
    };
    
    // Initial calculation
    calculateSizes();
    
    // Recalculate on resize
    const handleResize = () => {
      calculateSizes();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [baseCarouselItems]);
  
  return (
    <div className={styles.carouselContainer} ref={containerRef}>
      <div
        className={`
          ${styles.carouselTrack} 
          ${isHovering ? styles.paused : ''} 
          ${isDuplicating ? styles.noanimate : ''}
        `}
        style={{
          '--animation-duration': `${speed}s`,
          '--gap': `${gap}px`,
        }}
        ref={trackRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {(carouselItems.length ? carouselItems : baseCarouselItems).map((image) => (
          <div
            key={image.id}
            className={`${styles.imageWrapper} ${styles[image.shape]}`}
          >
            <Image
              src={image.src}
              alt={image.alt || `Carousel image`}
              width={image.width || 400}
              height={image.height || 500}
              className={styles.carouselImage}
              priority={image.id.includes('-0-')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteShapeCarousel;