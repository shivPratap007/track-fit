// import { useState } from 'react'
import {Button} from "./components/ui/button"
import {Procarousel} from "./components/slideShow/carousel"
import {Navbar} from "./components/navbar/navbar"
import {About} from "./components/about/about"
import './App.css'

function App(){
  return (
    <>
    <Navbar />
    <h1>Super Image</h1>
    <About />
    <Procarousel />
    <Button>Log In!</Button>
    </>
  )
}

export default App
