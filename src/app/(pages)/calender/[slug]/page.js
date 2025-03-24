import MonthHero from "@/app/components/Hero/MonthHero";
import Highlights from "@/app/components/Sections/Highlights";
import Tours from "@/app/components/Sections/Tours";
import Destinations from "@/app/components/Sections/Destinations";
import Experiences from "@/app/components/Sections/Experiences";
import Blogs from "@/app/components/Featured/Blogs";
import Banner from "@/app/components/Banner/Banner";

export default function calender({params}) {
    return(
        <main>
            <MonthHero imgUrl="/uploads/kyran_low_Mvk_LK_Gt_Bc_UA_unsplash_43cc09b761.jpg" />
            <Highlights title="Where to /n travel in January" imgUrl="/uploads/onbird_phu_quoc_RR_9_Jfr_D0i_MQ_unsplash_35f347f70b.jpg" />
            <Destinations heading={{title: "Best places/n to /svisit in January\\s", description: "Discover amazing places around the world"}} />
            <Experiences />
            <Tours  heading={{title: "/sTrips\\s in /n January", description: "You might be interested in these other tours"}} />
            <Blogs />
            <Banner />
        </main>
    )
}