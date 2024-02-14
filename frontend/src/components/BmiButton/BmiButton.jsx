import React from 'react'
import { Link } from 'react-router-dom'
import "./button.css"

const BmiButton = () => {
  return (
    <button className='bbutton'>
        <Link to="/bmi">Calculate BMI</Link>
    </button>
  )
}

export default BmiButton