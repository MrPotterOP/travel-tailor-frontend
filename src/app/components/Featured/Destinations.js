import styles from './styles.module.css';


import Button from '../UI/Button/Button';
import Tour from '../UI/Card/Tour';

import parsePrice from '@/app/util/parsePrice';

function Destinations ({
    destinations
}) {

    return ( 
        <div className={styles.destinations}>
            <div className={styles.destinationsBox}>
                {
                    destinations.map((destination) => (
                        <Tour 
                            key={destination.title}
                            {...destination}
                            type='destinations'
                            tag={`Trips starting from ${parsePrice(destination.tag)}`}
                        />)
                    )
                }
            </div>

            <Button className="sm" varient="outline" >View all</Button>

        </div>
    );
}

export default Destinations;