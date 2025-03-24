import MonthHero from "@/app/components/Hero/MonthHero"
import Highlights from "@/app/components/Sections/Highlights"
import Spotlights from "@/app/components/Sections/Spotlights"
import Destinations from "@/app/components/Sections/Destinations"
import Blogs from "@/app/components/Featured/Blogs"
import Banner from "@/app/components/Banner/Banner"
export default function Experiences({params}) {
    return(
        <main>
            <MonthHero imgUrl="/uploads/vlad_hilitanu_l_Im5_Rt_G_Pr_Qs_unsplash_592e71741a.jpg"  month={params.slug} />
            <Highlights title={`Enjoy your /n ${params.slug}s with `} imgUrl="/uploads/berkay_akbulut_z_A_Pt_Ap6x_SA_unsplash_a3c05cdc35.jpg" />
            <Spotlights  heading={{title: `Experience the best /n of /s ${params.slug}s\\s`, description: "Discover the best places to visit in India."}} />
            <Destinations  heading={{title: `Popular destinations /n for /s${params.slug}s\\s`, description: "Discover amazing places around the world"}} />
            <Blogs />
            <Banner />
        </main>
    )
}