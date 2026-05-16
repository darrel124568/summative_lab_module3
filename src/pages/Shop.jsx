import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import styles from './styles/Shop.module.css'
import ProductList from "../components/ProductList"



export default function Shop() {
    return (
        <>
        <Navbar />
        <ProductList />
        <Outlet />
        <Footer />
        </>
    )
}
