'use client'; 

import { useState, useEffect } from 'react';
import List from "@/app/components/List/List";
import Spinner from '@/app/components/UI/Spinner/Spinner'; 

import styles from './styles.module.css';


export default function DestinationsPage() {
  const [destinationData, setDestinationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Data Fetching ---
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading true when fetch starts
      setError(null); // Reset error state

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PREFIX}/api/apihome/destinations/`, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` 
            }
        });

        if (!response.ok) {
          // Throw an error if response status is not OK
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        setDestinationData(data);

      } catch (err) {
        console.error("Failed to fetch destinations:", err);
        setError(err.message || 'Failed to fetch destination data.');
      } finally {
        setIsLoading(false);
      }
    };

    // Call the fetch function when the component mounts
    fetchData();

  }, []); 


  return (
    <section className={styles.destinations}>
        
      {isLoading ? (
        <Spinner />
      ) : error ? (
        // Display error message
        <div style={{ padding: 'var(--pd-page)', color: 'red', textAlign: 'center' }}>
          Error: {error}
        </div>
      ) : !destinationData || !destinationData.list || destinationData.list.length === 0 ? (
         <div style={{ padding: 'var(--pd-page)', textAlign: 'center', color: 'var(--color-grey)' }}>
           No destinations found.
         </div>
      ) : (
        <List
          data={destinationData}
          itemBasePath="/destinations"
          itemKeyName="destinations" 
        />
      )}
    </section>
  );
}