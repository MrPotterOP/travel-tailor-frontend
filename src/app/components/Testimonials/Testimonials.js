'use client';
import styles from './styles.module.css';

import ScrollNav from '../UI/Button/ScrollNav';
import { useRef } from 'react';

import Testimonial from '../UI/Card/Testimonial';

import SectionTitle from '../UI/SectionTitle/SectionTitle';

function Testimonials({ reviews, title="/sTraveller's\\s Picks", description="More than just tours, we create memories.  Browse through genuine moments of joy, wonder, and connection shared by our past travelers.", ...props }) {

    const scrollRef = useRef(null);
    
    return ( 
        <section className={styles.testimonials}>
            
            <SectionTitle
                    title={title} 
                    description={description}
                    variant="center"
            ></SectionTitle>

            <div className={styles.reviewsBox}>
                <div className={styles.reviews} ref={scrollRef}>
                    {
                        reviews.map((review, index) => (
                            <Testimonial key={index} {...review} className={styles.reviewItem} />
                            ))
                    }
                </div>
                
                {
                    reviews.length > 0 && <ScrollNav scrollRef={scrollRef} className={styles.reviewsNav}/>
                }
            </div>
            
        </section>  
     );
}

export default Testimonials;
