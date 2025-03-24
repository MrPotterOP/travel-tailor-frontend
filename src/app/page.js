
import HomeHero from "./components/Hero/HomeHero";
import Features from "./components/Features/Features";
import Trips from "./components/Featured/Trips";
import MomentsHome from "./components/Featured/MomentsHome";
import GroupHome from "./components/Featured/GroupHome";
import Reviews from "./components/Featured/Reviews";
import Blogs from "./components/Featured/Blogs";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Features />
      <Trips />
      <MomentsHome />
      <GroupHome />
      <Reviews />
      <Blogs />
      <Banner title="Dreaming of an Adventure? /nLet's Talk!" cta="Enquire now" />
    </main>
  );
}

