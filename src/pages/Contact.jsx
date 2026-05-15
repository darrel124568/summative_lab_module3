import styles from '../pages/styles/Contact.module.css'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Contact() {

    return (
        <>
        <div className={styles.container}>
        <div>
            <button><FaLocationDot /> Nairobi</button>
        </div>
        <div>
            <button><FaPhoneAlt /> +254-140-234-736</button>
        </div>
        <div>
            <button><FaClock />Monday to Friday 8am-6pm</button>
        </div>
        <div>
            <button><FaInstagramSquare />
            <a href="https://www.instagram.com/sleepyy_hollow_?igsh=MTUyN2hhd2xlZWc1eA==">We are coffee</a>
            </button>
        </div>
        </div>
        </>
    )
}