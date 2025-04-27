import styles from './styles.module.css';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import BentoGrid from '../UI/BentoGrid/BentoGrid';
function Experiences({
    experiences = [
        {
            "id": 1,
            "title": "Solo Holiday",
            "slug": "solo-holiday",
            "imgUrl": "/uploads/berkay_akbulut_z_A_Pt_Ap6x_SA_unsplash_a3c05cdc35.jpg",
        },
        {
            "id": 2,
            "title": "Adventure",
            "slug": "adventure",
            "imgUrl": "/uploads/aimanness_harun_Ac_W_Kb_RFDX_9_E_unsplash_55b4d719f7.jpg",
        },
        {
            "id": 3,
            "title": "Couple Holiday",
            "slug": "couple-holiday",
            "imgUrl": "/uploads/visualsofdana_fg_Gz_B8_B4pp0_unsplash_d4b0a88bae.jpg",
        },
        {
            "id": 4,
            "title": "Family Holiday",
            "slug": "family-holiday",
            "imgUrl": "/uploads/visualsofdana_fg_Gz_B8_B4pp0_unsplash_d4b0a88bae.jpg",
        },
        {
            "id": 5,
            "title": "Beach Trip",
            "slug": "beach-trip",
            "imgUrl": "/uploads/onbird_phu_quoc_RR_9_Jfr_D0i_MQ_unsplash_35f347f70b.jpg",
        }
    ],
    className = "",
    heading = {
        title: "/sExperiences\\s",
        description: "You might be interested in these other experiences"
    },
    ...props
}) {
    return ( 
        <section className={styles.experiences}>
            <div className={styles.experiencesBox}>
                <SectionTitle 
                    title={heading.title}
                    description={heading.description}
                    className={styles.experiencesTitle}
                    variant='center'
                />
                <div className={styles.experiencesContent}>
                    <BentoGrid experiences={experiences} /> 
                </div>
            </div>
        </section>
     );
}

export default Experiences;