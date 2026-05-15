import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function AdminPortal() {

    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}