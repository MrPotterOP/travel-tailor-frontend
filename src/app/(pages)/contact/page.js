'use client';
import React from 'react';
import Contact from '@/app/components/Form/Contact';
import StickyContact from '@/app/components/Form/StickyContact';
import styles from './styles.module.css'; // Page-specific styles for layout

const EnquiryPage = () => {
  return (
    // Applying layout styles via CSS Module
    <div className={styles.pageWrapper}> {/* Use a wrapper class */}
      <div className={styles.pageContainer}> {/* Use a container for max-width and padding */}
        <div className={styles.formColumn}>
          <Contact />
        </div>
        <aside className={styles.stickyColumn}>
          <StickyContact />
        </aside>
      </div>
    </div>
  );
};

export default EnquiryPage;