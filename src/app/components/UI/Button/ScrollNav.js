'use client';

import React, { useState, useEffect } from "react";
// Replace with actual path to your ArrowBtn component
import ArrowBtn from "./ArrowBtn";

const ScrollNav = ({
  scrollRef, // Ref to the scrollable div
  scrollDistance = 300, // Default scroll distance in pixels
  checkScrollLimits = false, // Whether to disable buttons at scroll limits
  className = "", // Optional className for the container
}) => {
  // State to track if scrolling is possible in either direction
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to check scroll position and update button states
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding
    }
  };

  // Set up scroll position checking if enabled
  useEffect(() => {
    if (checkScrollLimits) {
      checkScrollPosition();
      const scrollableDiv = scrollRef.current;
      scrollableDiv?.addEventListener("scroll", checkScrollPosition);
      return () => scrollableDiv?.removeEventListener("scroll", checkScrollPosition);
    }
  }, [scrollRef, checkScrollLimits]);

  // Function to scroll left with smooth behavior
  const scrollLeft = () => {
    if (scrollRef.current) {
      // Dynamic scroll distance: use the width of the first child if available
      const firstItem = scrollRef.current.children[0];
      const distance = firstItem ? firstItem.offsetWidth : scrollDistance;
      // Use scrollTo with smooth behavior
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - distance,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right with smooth behavior
  const scrollRight = () => {
    if (scrollRef.current) {
      // Dynamic scroll distance: use the width of the first child if available
      const firstItem = scrollRef.current.children[0];
      const distance = firstItem ? firstItem.offsetWidth : scrollDistance;
      // Use scrollTo with smooth behavior
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`scroll-nav-box ${className}`}>
      <ArrowBtn
        direction="left"
        variant="outline"
        onClick={scrollLeft}
        disabled={checkScrollLimits && !canScrollLeft} // Disable if at the start
        aria-label="Scroll left"
      />
      <ArrowBtn
        direction="right"
        variant="filled"
        onClick={scrollRight}
        disabled={checkScrollLimits && !canScrollRight} // Disable if at the end
        aria-label="Scroll right"
      />
    </div>
  );
};

export default ScrollNav;