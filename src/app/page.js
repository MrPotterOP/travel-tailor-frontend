// app/page.js
import { notFound } from 'next/navigation'; 
import HomeHero from "./components/Hero/HomeHero";
import Features from "./components/Features/Features";
import Trips from "./components/Featured/Trips";
import MomentsHome from "./components/Featured/MomentsHome";
import GroupHome from "./components/Featured/GroupHome";
import Reviews from "./components/Featured/Reviews";
import Blogs from "./components/Featured/Blogs";
import Banner from "./components/Banner/Banner";

export const dynamic = 'force-static';
export const revalidate = false;

async function getHomepageData() {
  try {
    const response = await fetch(`${process.env.API_URL}/apihome/`, {
      cache: 'force-cache',
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    });

    if (!response.ok) {
      // Throw an error for non-2xx responses
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    notFound();

  }
}

export default async function Home() {
  const data = await getHomepageData();

  const { 
    hero,
    months,
    destinations,
    spotlights,
    reviews,
    blogs,
  } = data || {};

  const bannerTitle = "Dreaming of an Adventure? /n Let's Talk!";
  const bannerCta = "Enquire now";

  return (
    <main>
      {hero && hero.length > 0 && <HomeHero heroData={hero} />}
      <Features />
      {data.tours && data.tours.length > 0 && <Trips trips={data.tours} />}
      <MomentsHome />
      {destinations?.length > 0 && months?.length > 0 && spotlights?.length > 0 && <GroupHome destinations={destinations} months={months} spotlights={spotlights} expereinces={data.experiences} />}
     {reviews && reviews.length > 0 && <Reviews reviews={reviews} />}
      {blogs && blogs.length > 0 && <Blogs blogs={blogs} />}
      <Banner title={bannerTitle} cta={bannerCta} />
    </main>
  );
}