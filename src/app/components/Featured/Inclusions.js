import styles from './styles.module.css';
import Image from 'next/image';


import SectionTitle from '../UI/SectionTitle/SectionTitle';
import Button from '../UI/Button/Button';

function Inclusions({
    inclusions = ["Hotel pick-up and drop", "Santas Village guided tour", "Cold beverages", "Free WiFi", "Free parking", "Transportation", "Childcare", "Health care", "Gym", "Restaurant", "Shopping", "Local guides", ],
    exclusions = ["Personal expenses", "Waiter tips"],
    ...props
}) {
    return ( 
        <section className={styles.inclusions}>

            <SectionTitle
                title="/sInclusions\s /n at a glance"
                description="Know whats included in your trip and whats excluded"
            ></SectionTitle>

            <div className={styles.inclusionsBox}>
                <div className={styles.inclusionsContent}>
                    <div className={styles.inclusionsContentBox}>

                        <p className={styles.inclusionsContentTitle}>What&#39;s included</p>

                        {inclusions.map((item, index) => (
                            <div key={index} className={styles.inclusionsContentItem}>
                                <Image
                                    src="/images/tick.png"
                                    alt="Tick"
                                    width={20}
                                    height={20}
                                    className={styles.inclusionsContentImg}
                                />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.exclusionsContent}>

                    <div className={styles.exclusionsContentBox}>
                        <p className={styles.exclusionsContentTitle}>What&#39;s not</p>
                        {exclusions.map((item, index) => (
                            <div key={index} className={styles.exclusionsContentItem}>
                                <Image 
                                    src="/images/cross.png"
                                    alt="Cross"
                                    width={20}
                                    height={20}
                                    className={styles.inclusionssContentImg}
                                />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>

                    <Button
                        className={styles.inclusionsBtn}
                        varient="fill"
                        href='/contact'
                    >Enquire more</Button>
                </div>
            </div>
        </section>
     );
}

export default Inclusions;