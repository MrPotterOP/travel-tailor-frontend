'use client'

import styles from './styles.module.css';
import { useRef } from 'react';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Preview from '../UI/Card/Preview';
import ScrollNav from '../UI/Button/ScrollNav';

function Spotlights({
    spotlights = [
            {
                url: "/spotlights/mountain-trekking-adventure",
                title: "Mountain Trekking Adventure",
                description: "Experience the thrill of mountain trekking through some of India's most stunning landscapes.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            },
            {
                url: "/spotlights/cultural-immersion-rajasthan",
                title: "Cultural Immersion in Rajasthan",
                description: "Dive deep into the vibrant culture and rich heritage of colorful Rajasthan.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            },
            {
                url: "/spotlights/kerala-backwaters-exploration",
                title: "Kerala Backwaters Exploration",
                description: "Float through the tranquil backwaters of Kerala and discover the beauty of God's own country.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            },
            {
                url: "/spotlights/desert-safari-experience",
                title: "Desert Safari Experience",
                description: "Embark on an unforgettable journey through the golden sands of the Thar Desert.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            },
            {
                url: "/spotlights/himalayan-yoga-retreat",
                title: "Himalayan Yoga Retreat",
                description: "Find inner peace and rejuvenation at our exclusive yoga retreats in the Himalayas.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            },
            {
                url: "/spotlights/wildlife-safari-adventure",
                title: "Wildlife Safari Adventure",
                description: "Encounter exotic wildlife in their natural habitats across India's best national parks.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            }
        ],
    className = "",
    heading = {
        title: "/sWhat to see\\s/n and what to do",
        description: "Don't miss out to experience and explore the best of what India has to offer."
    },
    ...props
}){

    const spotlightsRef = useRef(null);

    return ( 
        <section className={styles.featuredSpotlights}>
            <div className={styles.spotlightsBox}>
                <SectionTitle 
                    title={heading.title}
                    description={heading.description}
                    className={styles.spotlightsTitle}
                />

                <div className={styles.spotlightsContent}>
                    <div className={styles.spotlights} ref={spotlightsRef}>
                        {
                            spotlights.map((spotlight, index) => (
                                <Preview
                                    key={index}
                                    url={spotlight.url}
                                    title={spotlight.title}
                                    description={spotlight.description}
                                    displayImgUrl={spotlight.displayImgUrl}
                                    className={styles.spotlightItem}
                                    btn="Explore more"
                                />)
                            )
                        }
                    </div>

                    <ScrollNav
                        scrollRef={spotlightsRef}
                        className={styles.scrollNav}
                    />
                </div>
            </div>
        </section>
    );
}

export default Spotlights;