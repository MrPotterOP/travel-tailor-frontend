

import ToursHero from "@/app/components/Hero/ToursHero";
import ToursInfo from "@/app/components/Features/TourInfo";
import Brief from "@/app/components/UI/Card/Brief";
import TripDays from "@/app/components/Featured/TripDays";
import Inclusions from "@/app/components/Featured/Inclusions";
import RollingCarousel from "@/app/components/UI/Rolling/ImgCarousal";
import ToursComponet from "@/app/components/Sections/Tours";
import Blogs from "@/app/components/Featured/Blogs";
import Banner from "@/app/components/Banner/Banner";

export default function Tours({params}) {

    const images = [
            {
                "id": 1,
                "src": "/images/moment1.jpg",
                "alt": "Moment 1",
                "width": 600,
                "height": 700
            },
            {
                "id": 2,
                "src": "/images/moment2.jpg",
                "alt": "Moment 2",
                "width": 600,
                "height": 700
            },
            {
                "id": 3,
                "src": "/images/moment3.jpg",
                "alt": "Moment 3",
                "width": 600,
                "height": 700
            },
            {
                "id": 4,
                "src": "/images/moment1.jpg",
                "alt": "Moment 4",
                "width": 600,
                "height": 700
            },
            {
                "id": 5,
                "src": "/images/moment1.jpg",
                "alt": "Moment 5",
                "width": 600,
                "height": 700
            },
            {
                "id": 6,
                "src": "/images/moment1.jpg",
                "alt": "Moment 6",
                "width": 600,
                "height": 700
            },
            {
                "id": 7,
                "src": "/images/moment1.jpg",
                "alt": "Moment 7",
                "width": 600,
                "height": 700
            }
        
    ]

    return (
        <main>
            <ToursHero />
            <ToursInfo />
            <Brief description="The travel plan offers a unique blend of Thailand&#39;s popular destinations in just a few days. Starting with Phuket, known for its stunning beaches, vibrant nightlife, and luxury resorts, travelers can unwind, explore the local culture, and enjoy iconic spots like Patong Beach and the Big Buddha. The itinerary then shifts to Krabi, a quieter paradise with lush greenery, limestone cliffs, and pristine beaches, providing a more relaxed, nature-focused experience. Moving between these two destinations allows travelers to experience the best of both worlds—Phukets excitement and Krabis tranquility—making it a dynamic, well-rounded getaway for any type of traveler." />
            <TripDays />
            <Inclusions />
            <RollingCarousel  images={images} speed={110} />
            <ToursComponet />
            <Blogs />
            <Banner />
        </main>
    )
}