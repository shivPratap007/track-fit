import { useState } from 'react'
import {Button} from "./components/ui/button"
import {Procarousel} from "./components/slideShow/carousel"
import {Navbar} from "./components/navbar/navbar"
import './App.css'

function App(){
  return (
    <>
    <Navbar />
    <h1>Super Image</h1>
    <Procarousel />
    <Button>Log In!</Button>
    </>
  )
}

export default App
