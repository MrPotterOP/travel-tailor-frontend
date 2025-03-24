'use client'

import styles from './styles.module.css';
import { useRef } from 'react';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Tour from '../UI/Card/Tour';
import ScrollNav from '../UI/Button/ScrollNav';
import parsePrice from '@/app/util/parsePrice';

function Destinations({
    destinations = [
        {
            "id": 9,
            "documentId": "x17axnljyeba2pzkkbmd24lu",
            "slug": "bali",
            "title": "Bali",
            "Place": "Bali",
            "brief": "Experience the tropical beauty of Bali with its lush landscapes, pristine beaches, and vibrant cultural heritage",
            "createdAt": "2025-03-08T08:24:58.237Z",
            "updatedAt": "2025-03-08T08:24:58.237Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Discover the island of gods and its magical treasures",
            "amount": 15000,
            "displayImgUrl": "/uploads/sylwia_bartyzel_e_U4pip_U_8_HA_unsplash_641b698718.jpg",
        },
        {
            "id": 7,
            "documentId": "e954jyp4hkmf15zufe4w6tvr",
            "slug": "santorini",
            "title": "Santorini",
            "Place": "Santorini, Greece",
            "brief": "Explore the stunning white-washed buildings and breathtaking views of the Aegean Sea on this Greek island paradise",
            "createdAt": "2025-03-08T08:21:24.476Z",
            "updatedAt": "2025-03-08T08:21:24.476Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Experience the iconic blue domes and spectacular sunsets",
            "amount": 25000,
            "displayImgUrl": "/uploads/aimanness_harun_Ac_W_Kb_RFDX_9_E_unsplash_55b4d719f7.jpg"
        },
        {
            "id": 1,
            "documentId": "o0qs44d75c8e06aiw75v5dfn",
            "slug": "paris-city-of-lights",
            "title": "Paris",
            "Place": "Paris, France",
            "brief": "Immerse yourself in the romance and elegance of Paris with its iconic landmarks, exquisite cuisine, and artistic treasures",
            "createdAt": "2025-03-08T07:44:39.092Z",
            "updatedAt": "2025-03-08T07:44:39.092Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Explore the cultural heart of Europe's most romantic city",
            "amount": "18000",
            "displayImgUrl": "/uploads/srivatsan_balaji_dz42hvd61_BE_unsplash_dd7cf8970a.jpg"
        },
        {
            "id": 9,
            "documentId": "x17axnljyeba2pzkkbmd24lu",
            "slug": "bali",
            "title": "Bali",
            "Place": "Bali",
            "brief": "Experience the tropical beauty of Bali with its lush landscapes, pristine beaches, and vibrant cultural heritage",
            "createdAt": "2025-03-08T08:24:58.237Z",
            "updatedAt": "2025-03-08T08:24:58.237Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Discover the island of gods and its magical treasures",
            "amount": "15000",
            "displayImgUrl": "/uploads/sylwia_bartyzel_e_U4pip_U_8_HA_unsplash_641b698718.jpg",
        },
        {
            "id": 7,
            "documentId": "e954jyp4hkmf15zufe4w6tvr",
            "slug": "santorini",
            "title": "Santorini",
            "Place": "Santorini, Greece",
            "brief": "Explore the stunning white-washed buildings and breathtaking views of the Aegean Sea on this Greek island paradise",
            "createdAt": "2025-03-08T08:21:24.476Z",
            "updatedAt": "2025-03-08T08:21:24.476Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Experience the iconic blue domes and spectacular sunsets",
            "amount": "25000",
            "displayImgUrl": "/uploads/aimanness_harun_Ac_W_Kb_RFDX_9_E_unsplash_55b4d719f7.jpg"
        },
        {
            "id": 1,
            "documentId": "o0qs44d75c8e06aiw75v5dfn",
            "slug": "paris-city-of-lights",
            "title": "Paris",
            "Place": "Paris, France",
            "brief": "Immerse yourself in the romance and elegance of Paris with its iconic landmarks, exquisite cuisine, and artistic treasures",
            "createdAt": "2025-03-08T07:44:39.092Z",
            "updatedAt": "2025-03-08T07:44:39.092Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Explore the cultural heart of Europe's most romantic city",
            "amount": "18000",
            "displayImgUrl": "/uploads/srivatsan_balaji_dz42hvd61_BE_unsplash_dd7cf8970a.jpg"
        },
        {
            "id": 9,
            "documentId": "x17axnljyeba2pzkkbmd24lu",
            "slug": "bali",
            "title": "Bali",
            "Place": "Bali",
            "brief": "Experience the tropical beauty of Bali with its lush landscapes, pristine beaches, and vibrant cultural heritage",
            "createdAt": "2025-03-08T08:24:58.237Z",
            "updatedAt": "2025-03-08T08:24:58.237Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Discover the island of gods and its magical treasures",
            "amount": "15000",
            "displayImgUrl": "/uploads/sylwia_bartyzel_e_U4pip_U_8_HA_unsplash_641b698718.jpg",
        },
        {
            "id": 7,
            "documentId": "e954jyp4hkmf15zufe4w6tvr",
            "slug": "santorini",
            "title": "Santorini",
            "Place": "Santorini, Greece",
            "brief": "Explore the stunning white-washed buildings and breathtaking views of the Aegean Sea on this Greek island paradise",
            "createdAt": "2025-03-08T08:21:24.476Z",
            "updatedAt": "2025-03-08T08:21:24.476Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Experience the iconic blue domes and spectacular sunsets",
            "amount": "25000",
            "displayImgUrl": "/uploads/aimanness_harun_Ac_W_Kb_RFDX_9_E_unsplash_55b4d719f7.jpg"
        },
        {
            "id": 1,
            "documentId": "o0qs44d75c8e06aiw75v5dfn",
            "slug": "paris-city-of-lights",
            "title": "Paris",
            "Place": "Paris, France",
            "brief": "Immerse yourself in the romance and elegance of Paris with its iconic landmarks, exquisite cuisine, and artistic treasures",
            "createdAt": "2025-03-08T07:44:39.092Z",
            "updatedAt": "2025-03-08T07:44:39.092Z",
            "publishedAt": null,
            "locale": "en",
            "description": "Explore the cultural heart of Europe's most romantic city",
            "amount": "18000",
            "displayImgUrl": "/uploads/srivatsan_balaji_dz42hvd61_BE_unsplash_dd7cf8970a.jpg"
        }

    ],
    className = "",
    heading = {
        title: "Popular Destinations",
        description: "Discover amazing places around the world"
    },
    ...props
}){

    const destinationsRef = useRef(null);

    return ( 
        <section className={styles.destinations}>
            <div className={styles.destinationsBox}>
                <SectionTitle 
                    title={heading.title}
                    description={heading.description}
                    className={styles.destinationsTitle}
                />

                <div className={styles.destinationsContent}>

                    <div className={styles.destinationsList} ref={destinationsRef}>
                            {
                                destinations.map((destination, index) => (
                                    <Tour
                                        key={index}
                                        slug={destination.slug}
                                        type="destinations"
                                        title={destination.title}
                                        description={destination.description}
                                        displayImgUrl={destination.displayImgUrl}
                                        tag={`Starting from ${parsePrice(destination.amount)}`}
                                        className={styles.destinationItem}
                                    />)
                                )
                            }
                    </div>

                    <ScrollNav
                        scrollRef={destinationsRef}
                        className={styles.scrollNav}
                    />
                    
                </div>
            </div>
        </section>
    );
}

export default Destinations;