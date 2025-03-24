import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';

function Footer() {

    const LinksRow = ({title, links}) => {
        return (
            <div className={styles.linksRow}>
                <p className={styles.linkTitle}>{title}</p>

                {
                    links.map((link, index) => {
                        return (
                            <Link href={link.url} key={index} className={styles.link}>
                                {link.name}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }

    const Company = [
        {   
            name: "About Us",
            url: "/about"
        },
        {
            name: "Contact Us",
            url: "/contact"
        }
    ]

    const QuickLinks = [
        {
            name: "Search",
            url: "/search"
        },
        {
            name: "Destinations",
            url: "/destinations"
        },
        {
            name: "Travel Calender",
            url: "/calendar"
        }
    ]

    const Contact = [
        {
            name: "+91 1234567890",
            url: "tel:+91 1234567890"
        },
        {
            name: "+91 1234567890",
            url: "tel:+91 1234567890"
        },
        {
            name: "traveltailor@gmail.com",
            url: "mailto:traveltailor@gmail.com"
        }
    ]



    return ( 
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <div className={styles.footerContent}>
                    <div className={styles.footerMain}>
                        <div className={styles.footerLogo}>
                            <Image src="/images/logo.png" width={100} height={100} alt='travel tailor logo' />
                        </div>

                        <div className={styles.mainDescription}>
                            <p>Planning a trip?  We&#39;ve got the inside scoop.  Destinations, tips, and all the good stuff to make your travels amazing.</p>
                            <div className={styles.location}>
                                <Image src="/images/location.png" width={20} height={20} alt='location' />
                                <p>123 Main Street, Anytown, USA</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footerLinks}>
                        <LinksRow title="Company" links={Company} />
                        <LinksRow title="Quick Links" links={QuickLinks} />
                        <LinksRow title="Contact" links={Contact} />
                    </div>
                </div>
                <div className={styles.footerExtra}>
                    <p>Copyright 2025. All rights reserved.</p>

                    <div className={styles.socials}>
                        <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/facebook.png" width={20} height={20} alt='facebook' />
                        </Link>

                        <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/instagram.png" width={20} height={20} alt='instagram' />
                        </Link>

                        <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                            <Image src="/images/twitter.png" width={20} height={20} alt='twitter' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;