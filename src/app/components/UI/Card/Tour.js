import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';


import Button from '../Button/Button';

function Tour({
    title,
    description,
    slug,
    className = "",
    type = "tours",
    btn = "Explore more",
    imgUrl,
    tag,
    ...props
}) {
    
    if (!imgUrl) {
        imgUrl = "/uploads/failed_bc13306774.png";
    }

    return ( 
        <Link href={`/${type}/${slug}`} className={`${styles.tour} ${className}`}>
            
            <div className={styles.tourBg}>
                <Image 
                    src={`${process.env.NEXT_PUBLIC_URL_PREFIX}${imgUrl}`}
                    alt="Tour"
                    width={600}
                    height={760}
                />
            </div>

            <div className={styles.tourContent}>
                <div className={styles.tagBox}>
                    <p>{tag}</p>
                </div>

                <div className={styles.tourContentMain}>
                    <h4 className={styles.tourTitle}>{title}</h4>
                    <p className={styles.tourDescription}>{description}</p>
                    <Button type="block" className="fw">{btn}</Button>
                </div>
            </div>

        </Link>
     );
}

export default Tour;