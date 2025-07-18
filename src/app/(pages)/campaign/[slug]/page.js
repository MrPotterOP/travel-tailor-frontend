"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname, } from "next/navigation";

import styles from '../../contact/styles.module.css';
import Spinner from "@/app/components/UI/Spinner/Spinner";

import CampaignForm from "@/app/components/UI/CampaignForm/CampaignForm";
import Banner from "@/app/components/Banner/Banner";
import Steps from "@/app/components/Steps/Steps";
import Plans from "@/app/components/Plans/Plans";
import Moments from "@/app/components/UI/BentoGrid/Moments";
import SectionTitle from "@/app/components/UI/SectionTitle/SectionTitle";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import Destinations from "@/app/components/Sections/Destinations";

import CampHero from "@/app/components/CampHero/CampHero";



function Campaign() {
    

    // Get path name
    const pathname = usePathname();

    // Get params
    const params = pathname.split("/");
    const campaignId = params[params.length - 1];

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- Data Fetching ---
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); 
            setError(null); 
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL_PREFIX}/api/apihome/campaign/${campaignId}/`, {
                    headers: {
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}` 
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.error("Failed to fetch data:", err);
                setError(err.message || 'Failed to fetch data.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div className={styles.status}>
            <Spinner />
        </div>;
    }
    if (error) {
        return <div className={styles.status}>Error: Page {campaignId} not found</div>;
    }
    if (!data) {
        return <div className={styles.status}>Error: Page {campaignId} not found</div>;;
    }


    return ( 
        <section className={styles.campaign}>
            <CampHero heroData={data.hero} >
                <CampaignForm />
            </CampHero>
            <Steps />
            <Plans plans={data.plans} />
            <div className={styles.moments} >
                <SectionTitle title="Curated /sSpecial Moments\s" description="Create memories for a lifetime with curated special moments" variant="center" />
                <Moments moments={data.moments} />
            </div>
            <div style={{marginTop: "80px"}} >

                <Destinations destinations={data.destinations} heading={{ title: `Popular Destinations for /s${data.title}\\s`, description: "Discover amazing places around the world" }} />
            </div>

            <Testimonials reviews={data.testimonials} title="Customer /sReviews\s" description="Hear from our customers about their experiences" />
            
            <div style={{marginTop: "80px"}}>

                <Banner />
            </div>

            
        </section>
     );
}

export default Campaign;