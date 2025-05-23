'use client'

import styles from './styles.module.css';
import { useRef } from 'react';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Tour from '../UI/Card/Tour';
import ScrollNav from '../UI/Button/ScrollNav';


function Tours({
    tours,
    className = "",
    heading = {
        title: "Explore /n similer /strips\\s",
        description: "You might be interested in these other tours"
    },
    ...props
}){

    const toursRef = useRef(null);
    

    return ( <>
        {tours && tours.length > 0 && <section className={styles.tours}>
            <div className={styles.toursBox}>
                <SectionTitle 
                    title={heading.title}
                    description={heading.description}
                    className={styles.toursTitle}
                    variant='center'
                />

                <div className={styles.toursContent}  >

                    <div className={styles.toursList} ref={toursRef}>
                            {
                                tours.map((tour, index) => (
                                <Tour
                                    key={index}
                                    slug={tour.slug}
                                    type="tours"
                                    title={tour.title}
                                    description={tour.description}
                                    imgUrl={tour.imgUrl}
                                    tag={`${tour.nights} Nights`}
                                    className={styles.tourItem}
                                />)
                                )
                            }
                    </div>

                    <ScrollNav
                        scrollRef={toursRef}
                        className={styles.scrollNav}
                    />
                    
                </div>
            </div>
        </section>}
        </>
    );
}

export default Tours;