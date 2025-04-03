'use client'
import styles from './styles.module.css';

import { useState } from 'react';



import SectionTitle from '../UI/SectionTitle/SectionTitle';

import TabNavigation from './TabNavigation';

import Destinations from './Destinations';
import Experiences from './Experiences';
import Calender from './Calender';
import Spotlights from './Spotlights';

function GroupHome({
    destinations,
    months,
    spotlights,
    expereinces
}) {

    // destinations = [
    //   {
	// 			"id": 3,
	// 			"documentId": "h4p0tqrrp86i70a1295shr2i",
	// 			"slug": "kyoto",
	// 			"title": "Kyoto",
	// 			"description": "Ancient capital, serene temples, geisha district",
	// 			"createdAt": "2025-03-08T07:11:40.778Z",
	// 			"updatedAt": "2025-03-13T08:39:22.854Z",
	// 			"publishedAt": null,
	// 			"locale": null,
	// 			"imgUrl": "/uploads/srivatsan_balaji_dz42hvd61_BE_unsplash_dd7cf8970a.jpg"
	// 		},
	// 		{
	// 			"id": 9,
	// 			"documentId": "b99nl6byvo4zfsa0qp9zrwmc",
	// 			"slug": "maldives",
	// 			"title": "Maldives",
	// 			"description": "Turquoise waters, luxury resorts, vibrant coral reefs",
	// 			"createdAt": "2025-03-08T07:34:39.577Z",
	// 			"updatedAt": "2025-03-08T07:34:39.577Z",
	// 			"publishedAt": null,
	// 			"locale": null,
	// 			"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 		},
	// 		{
	// 			"id": 5,
	// 			"documentId": "h3pcng0ly09p80ksdpwu6fcd",
	// 			"slug": "swiss-alps",
	// 			"title": "Swiss Alps",
	// 			"description": "Majestic mountains, charming villages",
	// 			"createdAt": "2025-03-08T07:17:40.880Z",
	// 			"updatedAt": "2025-03-08T07:17:40.880Z",
	// 			"publishedAt": null,
	// 			"locale": null,
	// 			"imgUrl": "/uploads/annie_spratt_W_Cgio_Ec_EV_Nc_unsplash_b0a9e215d0.jpg"
	// 		}
    // ]

    // expereinces = [
    //   {
	// 			"id": 1,
	// 			"documentId": "eq6dq94rq5d8pzslm1pfj3wh",
	// 			"title": "Adventure",
	// 			"createdAt": "2025-03-08T06:59:10.640Z",
	// 			"updatedAt": "2025-03-08T06:59:10.640Z",
	// 			"publishedAt": null,
	// 			"locale": null,
	// 			"slug": "adventure",
	// 			"imgUrl": "/uploads/vlad_hilitanu_l_Im5_Rt_G_Pr_Qs_unsplash_592e71741a.jpg"
	// 		},
	// 		{
	// 			"id": 9,
	// 			"documentId": "jfa79ixsx5dkk6c5j61hyz88",
	// 			"title": "Luxury Escapes",
	// 			"createdAt": "2025-03-08T07:08:51.076Z",
	// 			"updatedAt": "2025-03-08T07:08:51.076Z",
	// 			"publishedAt": null,
	// 			"locale": null,
	// 			"slug": "luxury-escapes",
	// 			"imgUrl": "/uploads/coffee_beans_d5233733e0.jpeg"
	// 		},
	// 		{
	// 			"id": 7,
	// 			"documentId": "emyu143t0ek2184oqh6piy1a",
	// 			"title": "Wildlife & Nature",
	// 			"createdAt": "2025-03-08T07:06:35.741Z",
	// 			"updatedAt": "2025-03-08T07:06:35.741Z",
	// 			"publishedAt": null,
	// 			"locale": null,
	// 			"slug": "wildlife-and-nature",
	// 			"imgUrl": "/uploads/kyran_low_Mvk_LK_Gt_Bc_UA_unsplash_43cc09b761.jpg"
	// 		}
    // ]

	// months = [
	// 	{
	// 		"id": 3,
	// 		"documentId": "dr0hkmnz8egwry9ay1p2jcqb",
	// 		"month": "january",
	// 		"createdAt": "2025-03-08T09:15:17.396Z",
	// 		"updatedAt": "2025-03-08T09:15:17.396Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/beautiful_picture_b7d7a198b7.jpeg"
	// 	},
	// 	{
	// 		"id": 5,
	// 		"documentId": "qpo1k14dh88si826urg3lvr1",
	// 		"month": "february",
	// 		"createdAt": "2025-03-08T09:32:27.937Z",
	// 		"updatedAt": "2025-03-08T09:32:27.937Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/kyran_low_Mvk_LK_Gt_Bc_UA_unsplash_43cc09b761.jpg"
	// 	},
	// 	{
	// 		"id": 7,
	// 		"documentId": "0p0o1o0h8d0d1d8p1p8o8k8s",
	// 		"month": "march",
	// 		"createdAt": "2025-03-08T09:33:59.710Z",
	// 		"updatedAt": "2025-03-08T09:33:59.710Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/kyran_low_Mvk_LK_Gt_Bc_UA_unsplash_43cc09b761.jpg"
	// 	},
	// 	{
	// 		"id": 1,
	// 		"documentId": "b2mhe78z4fkedkp0d0c5zhql",
	// 		"month": "april",
	// 		"createdAt": "2025-03-08T09:11:11.695Z",
	// 		"updatedAt": "2025-03-08T09:11:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 9,
	// 		"documentId": "1p8o8k8s",
	// 		"month": "may",
	// 		"createdAt": "2025-03-08T09:34:11.695Z",
	// 		"updatedAt": "2025-03-08T09:34:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 11,
	// 		"documentId": "b2mhe78z4fkedkp0d0c5zhql",
	// 		"month": "june",
	// 		"createdAt": "2025-03-08T09:11:11.695Z",
	// 		"updatedAt": "2025-03-08T09:11:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 13,
	// 		"documentId": "1p8o8k8s",
	// 		"month": "july",
	// 		"createdAt": "2025-03-08T09:34:11.695Z",
	// 		"updatedAt": "2025-03-08T09:34:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 15,
	// 		"documentId": "b2mhe78z4fkedkp0d0c5zhql",
	// 		"month": "august",
	// 		"createdAt": "2025-03-08T09:11:11.695Z",
	// 		"updatedAt": "2025-03-08T09:11:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 17,
	// 		"documentId": "1p8o8k8s",
	// 		"month": "september",
	// 		"createdAt": "2025-03-08T09:34:11.695Z",
	// 		"updatedAt": "2025-03-08T09:34:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 19,
	// 		"documentId": "b2mhe78z4fkedkp0d0c5zhql",
	// 		"month": "october",
	// 		"createdAt": "2025-03-08T09:11:11.695Z",
	// 		"updatedAt": "2025-03-08T09:11:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 21,
	// 		"documentId": "b2mhe78z4fkedkp0d0c5zhql",
	// 		"month": "november",
	// 		"createdAt": "2025-03-08T09:11:11.695Z",
	// 		"updatedAt": "2025-03-08T09:11:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	},
	// 	{
	// 		"id": 23,
	// 		"documentId": "1p8o8k8s",
	// 		"month": "december",
	// 		"createdAt": "2025-03-08T09:34:11.695Z",
	// 		"updatedAt": "2025-03-08T09:34:11.695Z",
	// 		"publishedAt": null,
	// 		"locale": null,	
	// 		"imgUrl": "/uploads/francesco_ungaro_0_F_Bp_Qa47_S0_unsplash_d6416a21ce.jpg"
	// 	}
	// ]

	// spotlights = [
	// 	{
	// 		"id": 1,
	// 		"title": "Golden Temple, Amritsar",
	// 		"description": "The Golden Temple is a Hindu temple dedicated to Lord Shiva, located in the holy city of Amritsar, India. It is one of the most popular tourist destinations in India and attracts millions of visitors every year.",
	// 		"url": "/tours/xxxxxxx",
	// 		"imgUrl": "/uploads/vlad_hilitanu_l_Im5_Rt_G_Pr_Qs_unsplash_592e71741a.jpg"
	// 	},
	// 	{
	// 		"id": 2,
	// 		"title": "Taj Mahal, Agra",
	// 		"description": "The Taj Mahal is a mausoleum located in Agra, India. It is one of the most iconic landmarks in India and attracts millions of visitors every year.",
	// 		"url": "/tours/xxxxxxx",
	// 		"imgUrl": "/uploads/vlad_hilitanu_l_Im5_Rt_G_Pr_Qs_unsplash_592e71741a.jpg"
	// 	},
	// 	{
	// 		"id": 3,
	// 		"title": "The Great Wall of China",
	// 		"description": "The Great Wall of China is a series of fortifications built along the northern borders of China to protect the country from invasions. It is one of the most iconic landmarks in China and attracts millions of visitors every year.",
	// 		"url": "/tours/xxxxxxx",
	// 		"imgUrl": "/uploads/vlad_hilitanu_l_Im5_Rt_G_Pr_Qs_unsplash_592e71741a.jpg"
	// 	},
		
	// ]

    const [activeTab, setActiveTab] = useState('popularDestinations');
	

    const renderContent = () => {
        switch(activeTab) {
          case 'popularDestinations':
            return <Destinations destinations={destinations}/>;
          case 'byTraveller':
            return <Experiences expereinces={expereinces}/>;
          case 'byMonth':
            return <Calender months={months}/>;
          case 'spotlights':
            return <Spotlights spotlights={spotlights} />;
          default:
            return <Destinations />;
        }
      };

    return ( 
        <section id={styles.groupHome}>
            <div className={styles.groupHomeBox}>
                <div className={styles.groupHomeNav}>
                    <SectionTitle
                        title="Start /n /syour journey\s with"
                        variant='center'
                    />

                    <TabNavigation 
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />
                </div>

                {renderContent()}
            </div>
        </section>
    );
}

export default GroupHome;