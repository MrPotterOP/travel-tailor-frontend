'use client'

import styles from './styles.module.css';
import { useRef } from 'react';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Preview from '../UI/Card/Preview';
import ScrollNav from '../UI/Button/ScrollNav';


function Blogs({
    blogs = [
            {
                slug: "spiritual-journey-to-the-himalayas",
                title: "Spiritual Journey to the Himalayas",
                description: "Hike through the foothills of the Himalayas and embrace the spirituality of Northern India.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            },
            {
                slug: "the-best-places-to-visit-in-india",
                title: "The Best Places to Visit in India",
                description: "Discover the best places to visit in India, from the bustling cities to the serene countryside.",
                displayImgUrl: "/uploads/cheng_lin_B_Jm_Fkj_Q_Fq44_unsplash_62a4ab1c4f.jpg",
            },
            {
                slug: "manali-skiing-and-snowboarding",
                title: "Manali Skiing and Snowboarding",
                description: "Experience the thrill of skiing and snowboarding in the breathtaking landscapes of Manali.",
                displayImgUrl: "/uploads/angelina_and_antonis_2_On4_JH_Ri46_M_unsplash_ac2eb318d8.jpg",
            },
            {
                slug: "the-best-places-to-visit-in-india",
                title: "The Best Places to Visit in India",
                description: "Discover the best places to visit in India, from the bustling cities to the serene countryside.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            },
            {
                slug: "the-best-places-to-visit-in-india",
                title: "The Best Places to Visit in India",
                description: "Discover the best places to visit in India, from the bustling cities to the serene countryside.",
                displayImgUrl: "/uploads/angelina_and_antonis_2_On4_JH_Ri46_M_unsplash_ac2eb318d8.jpg",
            },
            {
                slug: "manali-skiing-and-snowboarding",
                title: "Manali Skiing and Snowboarding",
                description: "Experience the thrill of skiing and snowboarding in the breathtaking landscapes of Manali.",
                displayImgUrl: "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg",
            }
        ],
    className = "",
    heading = {
        title: "More to /s read \\s",
        description: "We have a few blogs post you might like to read about travelling, travelling tips, and more."
    },
    ...props
}){

    const blogsRef = useRef(null);

    return ( 
        <section className={styles.featuredBlogs}>
            <div className={styles.blogsBox}>
                <SectionTitle 
                    title={heading.title}
                    description={heading.description}
                    className={styles.blogsTitle}
                />

                <div className={styles.blogsContent}  >

                    <div className={styles.blogs} ref={blogsRef}>
                            {
                                blogs.map((blog, index) => (
                                    <Preview
                                        key={index}
                                        url={`/blogs/${blog.slug}`}
                                        title={blog.title}
                                        description={blog.description}
                                        displayImgUrl={blog.displayImgUrl}
                                        className={styles.blogItem}
                                        btn="Read more"
                                    />)
                                )
                            }
                    </div>

                    <ScrollNav
                        scrollRef={blogsRef}
                        className={styles.scrollNav}
                    />
                    
                </div>
            </div>
        </section>
    );
}

export default Blogs;