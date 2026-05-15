import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

import cup1 from '../assets/cup1.png'


import styles from'../pages/styles/Home.module.css'

export default function Home() {

    return (
        <>
        <Navbar />
        <div className={styles.hero}>
            <img src={cup1} alt="CUP"/>
            <div>
            <h2 className={styles.catchPhrase}>Coffee <span >R</span> us</h2>
            <p>The go to store for your coffe needs</p>
            </div>
        </div>  
        <Outlet />      
        <Footer />
        </>
    )
}