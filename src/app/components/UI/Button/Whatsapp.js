
'use client';

import React from 'react';
import PropTypes from 'prop-types';
import styles from './whatsapp.module.css';
import Image from "next/image";

// Simple WhatsApp SVG Icon (You can replace this with an image or library like react-icons)
const WhatsAppIcon = () => (
    <Image src="/images/whatsapp.png" width={44} height={44} alt="WhatsApp Icon" />
);

const WhatsAppButton = ({
    phoneNumber, // Expects number with country code e.g., "911234567890"
    position = 'right', // 'left' or 'right'
    tooltip = 'Chat on WhatsApp',
    message = '', // Optional pre-filled message
}) => {
    // Basic cleanup: Remove non-digits from phone number
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    if (!cleanedPhoneNumber) {
        console.error('WhatsAppButton: Invalid or missing phone number.');
        return null; // Don't render if phone number is invalid
    }

    const whatsappUrl = `https://wa.me/${cleanedPhoneNumber}${
        message ? `?text=${encodeURIComponent(message)}` : ''
    }`;

    return (
        <a
            href={whatsappUrl}
            className={`${styles.whatsAppButton} ${styles.sticky} ${
                position === 'left' ? styles.left : styles.right
            }`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tooltip}
            title={tooltip} // Tooltip on hover
        >
            <WhatsAppIcon />
        </a>
    );
};

WhatsAppButton.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['left', 'right']),
    tooltip: PropTypes.string,
    message: PropTypes.string,
};

export default WhatsAppButton;