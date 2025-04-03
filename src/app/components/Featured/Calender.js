import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Calender({
    months
}) {

    const MonthCard = ({month, imgUrl}) => {
        return (
            <Link className={styles.monthCard} href={`/calendar/${month}`}>
                <div className={styles.monthCardBg}>
                    <Image src={`${process.env.NEXT_PUBLIC_URL_PREFIX}${imgUrl}`} alt={month} width={400} height={300}/>
                </div>
                <div className={styles.monthCardContent}>
                    <div className={styles.monthCardTitle}>{month}</div>
                </div>
            </Link>
        );
    };

    return ( 
        <div className={styles.calender}>
            {months.map((month, index) => (
                <MonthCard key={index} month={month.month} imgUrl={month.imgUrl}/>
            ))}
        </div>
     );
}

export default Calender;