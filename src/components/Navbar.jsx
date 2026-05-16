 import { NavLink } from "react-router-dom"
 import styles from '../components/styles/Navbar.module.css'
 import { useState, useEffect } from "react";

 import { IoHome } from "react-icons/io5";
 import { FaDatabase } from "react-icons/fa";
 import { RiAdminFill } from "react-icons/ri";
 import { FaPhoneAlt } from "react-icons/fa";
 import { GiHamburgerMenu } from "react-icons/gi"
 import { FaTimes } from "react-icons/fa";
 
 export default function Navbar() {
    const [clicked, setclicked] = useState(false)
    const [windowSize, setwindowSize] = useState(window.innerWidth >= 640)
    function handleClick() {
        setclicked(!clicked)
    }
    useEffect(()=> {
        function handleResize() {
            setwindowSize(window.innerWidth >= 640)
            console.log(windowSize)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }        
    }, [])
    return (
        <>
        {
        clicked? <button className={styles.hambuger} onClick={handleClick}>
        <FaTimes size={20}/>
        </button> :
        <button className={styles.hambuger} onClick={handleClick}>
        <GiHamburgerMenu size={20}/>
        </button>         
        }       
        <div  className={
      windowSize
      ? styles.container
      : clicked
      ? styles.container
      : styles.inactiveContainer
        } >
        <div>
        <NavLink to= '/' className={({isActive}) => isActive ? styles.Active : styles.NavLink}> <IoHome/>Home</NavLink> 
        <NavLink to= '/Shop' className={({isActive}) => isActive ? styles.Active : styles.NavLink}><FaDatabase/>Shop Now</NavLink> 
        <NavLink to= '/AdminPortal' className={({isActive}) => isActive ? styles.Active : styles.NavLink}><RiAdminFill />AdminPortal</NavLink>
        </div>  
        <div>
        <h4>We are coffee </h4>
        </div> 
        <div>
        <NavLink to= 'Contact' className={({isActive}) => isActive ? styles.contactActive : styles.contact}><FaPhoneAlt style={{margin : 2}}/>Contact Us</NavLink> 
         </div>             
        </div>
        </>
    )
    
 }