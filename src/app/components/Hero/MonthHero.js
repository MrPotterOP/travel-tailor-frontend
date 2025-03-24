import styles from './styles.module.css';
import Image from 'next/image';

function MonthHero({
    month = "January",
    imgUrl = "/uploads/sylwia_bartyzel_e_U4pip_U_8_HA_unsplash_641b698718.jpg",
    ...props
}) {
    return ( 
        <section className={styles.monthHero}>
            <div className={styles.monthHeroBox}>
                <div className={styles.monthHeroBg}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL_PREFIX}${imgUrl}`}
                        alt={month}
                        width={1400}
                        height={1000}
                        className={styles.monthHeroImg}
                        priority={true}
                    />
                </div>

                <div className={styles.monthHeroContent}>
                    <h1 className={styles.monthHeroTitle}>{month}</h1>
                </div>
            </div>
        </section>
     );
}

export default MonthHero;