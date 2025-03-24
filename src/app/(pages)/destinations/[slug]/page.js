

import DestinationsHero from "@/app/components/Hero/DestinationsHero";
import Highlights from "@/app/components/Sections/Highlights";
import Tours from "@/app/components/Sections/Tours";
import Spotlights from "@/app/components/Sections/Spotlights";
import Experiences from "@/app/components/Sections/Experiences";
import Blogs from "@/app/components/Featured/Blogs";
import Banner from "@/app/components/Banner/Banner";


export default function Destinations({params}) {

    return (
        <main>
            <DestinationsHero />
            <Highlights />
            <Tours heading={{title: "Explore /sIndia\\s", description: "You might be interested in these other tours"}} />
            <Spotlights />
            <Experiences />
            <Blogs />
            <Banner />
        </main>
    )
}