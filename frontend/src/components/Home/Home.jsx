import React from 'react'
import Navbar from '../navbar/navbar'
import Caltech from '../caltech/Caltech'
import QuoteOne from '../quoteOne/QuoteOne';
import Me from '../me/Me';
import Footer from '../footer/Footer';
import BmiButton from '../BmiButton/BmiButton';
import Features from '../features/Features';
import About from '../About/About';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Caltech/>
    <QuoteOne />
    <About />
    <Features />

    <Me />
    <BmiButton/>
    <Footer />

    </>
  )
}

export default Home