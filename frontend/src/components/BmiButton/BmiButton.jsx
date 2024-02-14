import React from 'react'
import { Link } from 'react-router-dom'

const BmiButton = () => {
  return (
    <button>
        <Link to="/bmi">Calculate BMI</Link>
    </button>
  )
}

export default BmiButton