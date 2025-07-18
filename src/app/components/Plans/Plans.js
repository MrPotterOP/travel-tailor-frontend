import styles from './styles.module.css';

import SectionTitle from '../UI/SectionTitle/SectionTitle';
import PlansBox from './PlansBox';

function Plans({ plans }) {
    if (!plans || plans.length === 0) {
        return null;
    }
    return ( 
        <section className={styles.plans}>
            <SectionTitle title="We can /s Plan\s" description="See what we can do for you" variant="center" />

            <PlansBox plans={plans} />
        </section>
     );
}

export default Plans;