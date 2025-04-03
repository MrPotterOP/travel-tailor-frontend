// app/search/page.js
"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchResult from '../../components/SearchResult/SearchResult'; 
import styles from './styles.module.css'; 

import Image from 'next/image';

// Base paths and titles (remain the same)
const BASE_PATHS = {
  blogs: '/blogs',
  destinations: '/destinations',
  experiences: '/experiences',
  tours: '/tours',
};

const CATEGORY_TITLES = {
  blogs: 'Blog Posts',
  destinations: 'Destinations',
  experiences: 'Experiences',
  tours: 'Tours',
};

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery); // Input state
  const [submittedQuery, setSubmittedQuery] = useState(initialQuery); // Query used for the search results being shown
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch search results
  const performSearch = async (query) => {
    if (!query) {
      setSearchResults(null);
      setError(null);
      setIsLoading(false);
      setSubmittedQuery('');

      router.push('/search');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSubmittedQuery(query); 

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PREFIX}/api/apihome/search/${encodeURIComponent(query)}`, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        }
      });;
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data);

      router.push(`/search?q=${encodeURIComponent(query)}`);
    } catch (err) {
      console.error("Failed to fetch search results:", err);
      setError("Sorry, we couldn't perform the search. Please try again later.");
      setSearchResults(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to perform search if initialQuery exists on load
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    performSearch(searchQuery.trim()); 
  };

  // Handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Calculate if there are any results
  const hasResults = searchResults && Object.values(searchResults).some(arr => arr.length > 0);

  return (
    <div className={styles.searchContainer}>
      {/* Removed separate page title, search bar acts as primary focus */}
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.searchIcon}> {/* Optional div wrapper if needed */}
            <Image
                src="/images/search.png" // Ensure this path is correct
                alt="" // Decorative icon, alt can be empty
                width={20} // Adjust size as needed
                height={20} // Adjust size as needed
                aria-hidden="true" // Hide from screen readers
            />
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search destinations, blogs, tours..."
          className={styles.searchInput}
          aria-label="Search query"
        />
        <button type="submit" className={styles.searchButton} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className={styles.resultsArea}>
        {isLoading && <p className={styles.loadingMessage}>Loading results...</p>}

        {error && <p className={styles.errorMessage}>{error}</p>}

        {!isLoading && !error && submittedQuery && searchResults && !hasResults && (
          <p className={styles.noResultsMessage}>
            {`No results found for ${submittedQuery}`}
          </p>
        )}

        {!isLoading && !error && searchResults && hasResults && (
          Object.keys(BASE_PATHS).map((key) => {
            const items = searchResults[key];
            const title = CATEGORY_TITLES[key];
            const basePath = BASE_PATHS[key];

            if (items && items.length > 0) {
              return (
                <section key={key} className={styles.categorySection}>
                  <h2 className={styles.categoryTitle}>{title} <span>({items.length})</span></h2>
                  <div className={styles.resultsGrid}>
                    {items.map((item) => (
                      <SearchResult
                        key={`${key}-${item.slug}`}
                        item={item}
                        href={`${basePath}/${item.slug}`}
                      />
                    ))}
                  </div>
                </section>
              );
            }
            return null;
          })
        )}

        {/* Initial state message (only show if no query submitted and not loading) */}
        {!submittedQuery && !isLoading && !error && (
            <p className={styles.promptMessage}>Enter a term and click Search.</p>
        )}
      </div>
    </div>
  );
}