import React from 'react'
import Navbar from '../navbar/Navbar'
import Caltech from '../caltech/Caltech'
import QuoteOne from '../quoteOne/QuoteOne';
import Me from '../me/Me';
import Footer from '../footer/Footer';
import BmiButton from '../BmiButton/BmiButton';
import IdealWeight from '../IdealWeight/IdealWeight';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Caltech/>
    <QuoteOne />

    <Me />
    <BmiButton/>
    <IdealWeight/>
    <Footer />

    </>
  )
}

export default Home