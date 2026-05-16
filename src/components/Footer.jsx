import styles from '../components/styles/Footer.module.css'
import logo from '../assets/coffee_maker_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'
import { NavLink } from 'react-router-dom'

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    const date = new Date()
    return (
<>
    <div className={styles.container}>
    <div className={styles.brand}>
        <h3>
            WE ARE COFFEE
        </h3>

        <p>
            Brewing rich, flavorful coffee experiences for every coffee lover.
            From freshly roasted beans to handcrafted drinks, we bring people
            together one cup at a time.
        </p>
    </div>

    <div className={styles.location}>
        <p>
            Proudly serving authentic Kenyan coffee culture with locally sourced
            beans and carefully crafted blends inspired by the heart of Africa.
        </p>
    </div>

    <div className={styles.legal}>
        <p style={{ color: "white" }}>
            <FaRegCopyright /> {date.getFullYear()} WE ARE COFFEE.
            All rights reserved.
        </p>

        <p>
            Built for coffee enthusiasts who appreciate quality, comfort,
            and community.
        </p>
    </div>
</div>
    <div className={styles.links}>
        <hr />
        <p>Connect with us </p>

        <a
            href="https://www.instagram.com/sleepyy_hollow_?igsh=MTUyN2hhd2xlZWc1eA=="
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaInstagram style={{ color: "white" }} size={20} />
        </a>

        <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaTwitter style={{ color: "white" }} size={20} />
        </a>

        <a
            href="https://www.github.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub style={{ color: "white" }} size={20} />
        </a>
    </div>
</>
    )
}