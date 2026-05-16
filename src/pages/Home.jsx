import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet, useNavigate} from "react-router-dom"
import { useState } from "react";


import { FaJava } from "react-icons/fa";

import styles from'../pages/styles/Home.module.css'

export default function Home() {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    function handleClick() {
        if(clicked) {
            navigate('About')
            setClicked(!clicked)
        }
        else{
            navigate('/')
            setClicked(!clicked)
        }
    }
    return (
        <>
        <Navbar />
        <div className={styles.hero}>
            <div>
            <h2 className={styles.catchPhrase}>Coffee <span >R</span> us</h2>
            <p>The go to store for your coffe needs</p>
            </div>
            <FaJava className={styles.image}/>
            <button className={styles.about} onClick={handleClick}>Get to know us</button>
        </div>  
        <Outlet />      
        <Footer />
        </>
    )
}
