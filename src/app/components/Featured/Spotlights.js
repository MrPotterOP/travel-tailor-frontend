import styles from './styles.module.css';


import Preview from '../UI/Card/Preview';

function Spotlights({
    spotlights
}) {
    return ( 
        <div className={styles.spotlights}>
            {
                spotlights.map((spotlight, index) => (
                    <Preview 
                        key={index}
                        title={spotlight.title}
                        description={spotlight.description}
                        imgUrl={spotlight.imgUrl}
                        url={spotlight.link}
                        btn="Explore more"
                    />
                ))
            }
        </div>
     );
}

export default Spotlights;