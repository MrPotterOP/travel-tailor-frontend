import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Experiences({
    expereinces
}) {


    const ExperienceCard = ({title, slug, displayImgUrl}) =>{
        return (
            <Link href={`/experiences/${slug}`} className={styles.expCard}>
                <div className={styles.experiencesBg}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL_PREFIX}${displayImgUrl}`}
                        alt="Experience"
                        width={500}
                        height={660}
                    />
                </div>
                <div className={styles.experienceContent}>
                    <h4 className={styles.experienceTitle}>{title}</h4>
                </div>
            </Link>
        )
    }

    return ( 
        <div className={styles.experiences}>
            <div className={styles.experiencesBox}>
                {
                    expereinces.map(experience => (
                        <ExperienceCard 
                            key={experience.id}
                            {...experience}
                        />
                    ))
                }
            </div>
        </div>
     );
}

export default Experiences;