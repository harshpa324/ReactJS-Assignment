import React from 'react'
import './style.css'
import Navbar from '../Navbar/nav'
import Header from '../Header/index'
import Builders from '../Builders/index'
import Deals from '../Deals/index'
import Footer from '../Footer/index'

const Home = () => {
    return(
        <>
            <Navbar />
            <Header />
            <Builders />
            <Deals />
            <Footer />
        </>
    )
}

export default Home