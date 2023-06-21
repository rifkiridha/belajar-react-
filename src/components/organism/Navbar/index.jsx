import React from 'react'
import Header from "../../molecules/Header"
import Login from "../Login"
import Footer from '../../molecules/Footer'

export default function Navbar ({ type }) {
    if (type === "header") {
        return (
            <Header />
        )
    } else {
        return (
            <Footer />
        )
    }
}