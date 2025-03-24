import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';


import Button from '../UI/Button/Button';

import parseTitle from '@/app/util/parseTitle';

function Banner({
    title = "Dreaming of an Adventure? /nLet's Talk!",
    url = "/contact",
    imgUrl = "/images/banner.jpg",
    cta = "Enquire now",
    ...props
}) {
    return ( 
        <section className={styles.banner}>
            <Link className={styles.bannerBox} href={url}>
                <div className={styles.bannerBg}>
                    <Image
                        src={imgUrl}
                        alt={title}
                        width={1100}
                        height={560}
                        className={styles.bannerImg}
                    />
                </div>

                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>{parseTitle(title)}</h1>

                    <Button 
                        varient="fill"
                        className={`md ${styles.bannerBtn}`}
                        type="block"
                    >
                        {cta}
                    </Button>
                </div>
            </Link>
        </section>
     );
}

export default Banner;