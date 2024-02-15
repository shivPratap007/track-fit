import React from 'react'
import Navbar from '../navbar/navbar'
import Caltech from '../caltech/Caltech'
import QuoteOne from '../quoteOne/QuoteOne';
import Me from '../me/Me';
import Footer from '../footer/Footer';
import BmiButton from '../BmiButton/BmiButton';
import IdealWeight from '../IdealWeight/IdealWeight';
import Main from '../Main/Main';
import Entries from '../foodEntry/FoodEntry'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Caltech/>
    <QuoteOne />
    <Main />

    <Me />
    <br></br>
    <br></br>
    <br></br>
    <Entries />
    <BmiButton/>
    {/* <IdealWeight/> */}
    <Footer />

    </>
  )
}

export default Home