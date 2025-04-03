'use client'

import styles from './styles.module.css';
import { useRef } from 'react';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Preview from '../UI/Card/Preview';
import ScrollNav from '../UI/Button/ScrollNav';

function Spotlights({
    spotlights = [
        {
			"title": "Conquer the Inca Trail, Journey to Machu Picchu",
			"imgUrl": "/uploads/the_internet_s_own_boy_24fe91dfb2.jpeg",
			"description": "Challenge yourself to an unforgettable trek! Hike the Inca Trail to Machu Picchu and discover ancient wonders amidst stunning landscapes. Start your adventure",
			"link": "/tours/inca-trail-to-machu-picchu-trek"
		},
		{
			"title": "Hike the Majestic Swiss Alps This Summer",
			"imgUrl": "/uploads/onbird_phu_quoc_RR_9_Jfr_D0i_MQ_unsplash_35f347f70b.jpg",
			"description": "Adventure awaits in the Swiss Alps! Join our hiking tour and witness breathtaking mountain vistas, charming villages, and invigorating trails. Limited spots available!",
			"link": "/destinations/testing-this-destination-for-second-time"
		},
		{
			"title": "Maldives Overwater Bungalow Escape",
			"imgUrl": "/uploads/visualsofdana_fg_Gz_B8_B4pp0_unsplash_d4b0a88bae.jpg",
			"description": "Your dream escape to the Maldives awaits! Stay in luxurious overwater bungalows, dive into turquoise waters, and unwind in ultimate bliss. Treat yourself to paradise",
			"link": "/tours/maldives-overwater-bliss"
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
                                    url={spotlight.link}
                                    title={spotlight.title}
                                    description={spotlight.description}
                                    imgUrl={spotlight.imgUrl}
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