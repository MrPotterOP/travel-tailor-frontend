// components/DynamicList/List.js
"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'; // Added useMemo
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

// --- Helper Function (can be outside or inside, but define before use) ---
const getCategoryId = (title) => title.toLowerCase().replace(/\s+/g, '-');

// --- Main Component ---
const List = ({ data, itemBasePath, itemKeyName }) => {
  // --- Hooks MUST be called unconditionally at the top ---
  const [activeCategory, setActiveCategory] = useState('');
  const contentRef = useRef(null);

  // Memoize categories derivation for stability if data/itemKeyName don't change
  const categories = useMemo(() => {
    if (!data || !Array.isArray(data.list) || !itemKeyName) {
        return []; // Return empty array if data is invalid/missing
    }
    return data.list.filter(category => {
        const items = category[itemKeyName];
        return items && Array.isArray(items) && items.length > 0;
    });
  }, [data, itemKeyName]); // Dependencies for recalculating categories

  // Define the callback using useCallback
  const observerCallback = useCallback((entries) => {
    let bestEntry = null;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!bestEntry || entry.boundingClientRect.top < bestEntry.boundingClientRect.top) {
           if (entry.boundingClientRect.top < window.innerHeight * 0.4) { // ~Top 40% of viewport
              bestEntry = entry;
           }
        }
      }
    });

    if (bestEntry) {
      setActiveCategory(bestEntry.target.id);
    }
    // Optional: Handle scrolling up past the top item
    // else if (!entries.some(e => e.isIntersecting) && window.scrollY === 0 && categories.length > 0) {
    //    setActiveCategory(getCategoryId(categories[0].title));
    // }
  }, []); // No dependencies needed here as it doesn't use component state/props directly


  // Define the effect using useEffect
  useEffect(() => {
    // Now 'categories' is stable thanks to useMemo
    if (categories.length === 0) {
        // If no categories, ensure activeCategory is cleared (optional)
        setActiveCategory('');
        return; // No categories to observe
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60% 0px', // Adjust trigger point as needed
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToObserve = [];

    categories.forEach((category) => {
      const categoryId = getCategoryId(category.title);
      const element = document.getElementById(categoryId);
      if (element) {
        observer.observe(element);
        elementsToObserve.push(element);
      } else {
        console.warn(`[DynamicList] Element with ID "${categoryId}" not found for observer.`);
      }
    });

     // --- Set Initial Active Category on Load/Mount ---
     // Defer this slightly to ensure layout is stable
     const timerId = setTimeout(() => {
        let initialActive = '';
        let minTop = Infinity;
        let firstCategoryId = categories.length > 0 ? getCategoryId(categories[0].title) : '';

        elementsToObserve.forEach(element => {
            if(element) {
                const rect = element.getBoundingClientRect();
                // Check if it's visible (top is above bottom edge) and it's the highest one found so far
                // Allow slightly below viewport top (e.g. 100px) to catch items starting just offscreen
                if(rect.top < window.innerHeight && rect.bottom > 0 && rect.top < minTop) {
                    minTop = rect.top;
                    initialActive = element.id;
                }
            }
        });
        // If no category is actively visible, default to the first one
        setActiveCategory(initialActive || firstCategoryId);
     }, 100); // Small delay (e.g., 100ms)


    // Cleanup function
    return () => {
      clearTimeout(timerId); // Clear the timeout on unmount/re-run
      elementsToObserve.forEach(element => {
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [categories, observerCallback]); // Dependencies: categories (memoized) and observerCallback (memoized)


  // --- Conditional Returns *AFTER* Hooks ---
  if (categories.length === 0) {
      // Check if the original data was actually missing or just yielded no valid categories
      if (!data || !Array.isArray(data.list) || data.list.length === 0) {
           return <p className={styles.emptyMessage}>No data provided.</p>; // Or null
      }
      if (!itemKeyName) {
           console.error('DynamicList (List): itemKeyName prop is required.');
           return <p className={styles.errorMessage}>Configuration error: Missing itemKeyName.</p>;
      }
      // Data was provided, but filtering resulted in no categories with items
      return <p className={styles.emptyMessage}>No items to display in any category.</p>; // Or null
  }


  // --- Event Handlers (defined after hooks and checks) ---
  const handleNavClick = (e, categoryId) => {
    e.preventDefault();
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your FIXED header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
      // setActiveCategory(categoryId); // Optional immediate feedback
    }
  };


  // --- Render Logic ---
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <nav className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>Sections</h3>
        <ul className={styles.navList}>
          {categories.map((category) => {
            const categoryId = getCategoryId(category.title);
            const isActive = activeCategory === categoryId;
            return (
              <li key={categoryId} className={styles.navItem}>
                <a
                  href={`#${categoryId}`}
                  onClick={(e) => handleNavClick(e, categoryId)}
                  className={`${styles.navLink} ${isActive ? styles.activeText : ''}`}
                  aria-current={isActive ? 'page' : undefined} // Accessibility improvement
                >
                  {category.title}
                </a>
                {isActive && (
                  <motion.div
                    className={styles.activeHighlight}
                    layoutId="activeHighlight"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Content Area */}
      <main className={styles.contentArea} ref={contentRef}>
        {categories.map((category) => {
          // itemKeyName is guaranteed to exist here due to earlier check
          const items = category[itemKeyName];
          const categoryId = getCategoryId(category.title);

          return (
            <section
              key={categoryId}
              id={categoryId}
              className={styles.categorySection}
              style={{ scrollMarginTop: '80px' }} // Adjust to header height
            >
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.itemGrid}>
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`${itemBasePath}/${item.slug}`}
                    className={styles.itemCard}
                  >
                    <div className={styles.imageWrapper}>
                      {item.imgUrl ? (
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL_PREFIX || ''}${item.imgUrl}`}
                          alt={item.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className={styles.itemImage}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className={styles.placeholderImage}>No Image</div>
                      )}
                      <div className={styles.overlay}></div>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default List;