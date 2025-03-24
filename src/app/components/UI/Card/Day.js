import styles from './styles.module.css';
import Image from 'next/image';

import ParallaxScrollImg from '../Animation/ParallaxScrollImg';


function Day({
    brief,
    imgUrl,
    day,
    ...props
}) {
    return ( 
        <div className={styles.day}>
            <div className={styles.dayImgBox}>
                <ParallaxScrollImg speed={6} direction='up'>
                <Image
                    src={imgUrl}
                    alt={brief}
                    width={540}
                    height={430}
                    className={styles.dayImg}
                    priority={true}
                />
                </ParallaxScrollImg>
            </div>

            <div className={styles.dayContent}>
                <h3 className={styles.dayTitle}>Day {day}</h3>
                <p className={styles.dayBrief}>{brief}</p>
            </div>
        </div>
     );
}

export default Day;