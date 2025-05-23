import styles from './styles.module.css';

import Image from 'next/image';
import Button from '../UI/Button/Button'; 
import ParallaxScrollImg from '../UI/Animation/ParallaxScrollImg';

import parseTitle from '@/app/util/parseTitle';
import parseUrl from '@/app/util/parseUrl';



function Highlights({
    title = "Why India? /nUnlock a world of wonders",
    brief = "India is a country of diverse cultures, traditions, and languages. It is a melting pot of people from different backgrounds, religions, and traditions. India is also a country of innovation and progress. It has a rich history and a vibrant culture that continues to evolve and change. to explore India's diversity and uniqueness, we invite you to visit India and experience its wonders. with India, you can explore its rich history, culture, and traditions, and discover its vibrant and dynamic culture.",
    imgUrl = "/uploads/annie_spratt_W_Cgio_Ec_EV_Nc_unsplash_b0a9e215d0.jpg",
    url="/contact",
    noBtn,

    ...props
}) {
    return ( 
        <section className={styles.highlight}>
            <div className={styles.highlightBox}>
                <div className={styles.highlightContent}>
                    <div className={styles.highlightContentMain}>
                        <h2 className={styles.highlightTitle}>{parseTitle(title)}</h2>
                        <p className={styles.highlightBrief}>{parseTitle(brief)}</p>
                    </div>

                    { !noBtn && <div className={styles.highlightBtnBox}>
                        <Button
                            href={url}
                            varient='outline'
                            className={styles.highlightBtn}
                        >Start planning</Button>
                    </div>}
                </div>

                
                    <div className={styles.highlightImg}>
                        <ParallaxScrollImg speed={6} direction='up'>
                            <Image
                                src={parseUrl(imgUrl)}
                                alt='highlight'
                                width={790}
                                height={740}
                                objectFit='cover'
                            />
                        </ParallaxScrollImg>
                    </div>

            </div>
        </section>
     );
}

export default Highlights;