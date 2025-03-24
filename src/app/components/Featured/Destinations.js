import styles from './styles.module.css';


import Button from '../UI/Button/Button';
import Tour from '../UI/Card/Tour';

function Destinations ({
    destinations
}) {
    return ( 
        <div className={styles.destinations}>
            <div className={styles.destinationsBox}>
                {
                    destinations.map(destination => (
                        <Tour 
                            key={destination.id}
                            {...destination}
                            type='destinations'
                            tag='Trips starting from ₹10,000'
                        />)
                    )
                }
            </div>

            <Button className="sm" varient="outline" >View all</Button>

        </div>
    );
}

export default Destinations;