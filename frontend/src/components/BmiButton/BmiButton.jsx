import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"

const BmiButton = () => {
  return (
    <>
    <center>
    <button className='bbutton' style={{marginTop:'5rem', marginBottom:'5rem'}}>
        <Link to="/bmi">Calculate BMI</Link>
    </button>
    </center>
    </>
  )
}

export default BmiButton