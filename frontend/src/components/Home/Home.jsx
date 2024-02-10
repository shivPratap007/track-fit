import React from 'react'
import Navbar from '../navbar/Navbar'
import Caltech from '../caltech/Caltech'
import QuoteOne from '../quoteOne/QuoteOne';
import Me from '../me/Me';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Caltech/>
    <QuoteOne />
    <Me />
    <Footer />

    </>
  )
}

export default Home