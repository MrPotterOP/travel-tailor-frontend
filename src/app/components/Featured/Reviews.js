'use client';


import styles from './styles.module.css';
import {useRef} from 'react';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Review from '../UI/Card/Review';

import ScrollNav from '../UI/Button/ScrollNav';

function Reviews({
    reviews
}) {

    reviews = [
        {
            name: 'John Doe',
            source: 'google',
            review: 'We recently booked a trip through Travel Tailor and my overall experience was positive. Thanks to Ruchith for the service offered. He was very responsive to all the questions and felt we got a good value for money. Booking process was very easy and straightforward.'
        },
        {
            name: 'Mithun Reddy',
            source: 'google',
            review: 'I enjoyed my trip to Maldives. The tour guide was very knowledgeable and the food was delicious. I would recommend this tour to anyone looking for a unique experience.'
        },
        {
            name: 'John Doe',
            source: 'google',
            review: 'We recently booked a trip through Travel Tailor and my overall experience was positive. Thanks to Ruchith for the service offered. He was very responsive to all the questions and felt we got a good value for money. Booking process was very easy and straightforward.'
        },
        {
            name: 'Mithun Reddy',
            source: 'google',
            review: 'I enjoyed my trip to Maldives. The tour guide was very knowledgeable and the food was delicious. I would recommend this tour to anyone looking for a unique experience.'
        },
        {
            name: 'Mithun Reddy',
            source: 'google',
            review: 'I enjoyed my trip to Maldives. The tour guide was very knowledgeable and the food was delicious. I would recommend this tour to anyone looking for a unique experience.'
        },
        {
            name: 'Mithun Reddy',
            source: 'google',
            review: 'I enjoyed my trip to Maldives. The tour guide was very knowledgeable and the food was delicious. I would recommend this tour to anyone looking for a unique experience.'
        },
        {
            name: 'Jon Doe',
            source: 'facebook',
            review: 'The food was amazing and the service was excellent. The tour guide was very knowledgeable and the experience was unforgettable.'
        }
    ]

    const scrollRef = useRef(null);

    return ( 
        <section id={styles.reviews}>
            <div className={styles.reviewsBox}>
                <SectionTitle
                    title="Hear from /sfellow adventurers\s"
                    variant='center'
                    description="More than just tours and experiences, our reviews are a reflection of our customers' experiences. We want to share our knowledge and help you make the most of your adventure."
                />

                <div className={styles.reviewsContent}>
                    <div className={styles.reviewCards} ref={scrollRef}>
                        {reviews.map((review, index) => (
                            <Review
                                key={index}
                                name={review.name}
                                source={review.source}
                                review={review.review}
                                className={styles.reviewItem}
                            />
                        ))}
                    </div>
                    
                    <ScrollNav
                        scrollRef={scrollRef}
                        className={styles.scrollNav}
                    />

                </div>
            </div>
        </section>
     );
}

export default Reviews;