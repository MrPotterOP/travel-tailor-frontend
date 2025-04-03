// components/SearchResultCard/SearchResultCard.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'; // Dedicated CSS module

const SearchResult = ({ item, href }) => {
  if (!item || !href) {
    return null; // Don't render if item or href is missing
  }

  const imageUrl = item.imgUrl
    ? `${process.env.NEXT_PUBLIC_URL_PREFIX || ''}${item.imgUrl}`
    : '/placeholder-image.png'; // Provide a default placeholder

  return (
    <Link href={href} className={styles.itemCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={item.title || 'Search result image'}
          fill
          style={{ objectFit: 'cover' }}
          className={styles.itemImage}
          sizes="(max-width: 768px) 50vw, 33vw" // Adjust sizes as needed
          onError={(e) => { e.currentTarget.src = '/placeholder-image.png'; }} // Fallback on error
        />
        <div className={styles.overlay}></div>
        <h3 className={styles.itemTitle}>{item.title}</h3>
      </div>
      
    </Link>
  );
};

export default SearchResult;