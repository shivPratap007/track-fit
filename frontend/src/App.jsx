import { useState } from 'react'
import {Button} from "./components/ui/button"
import {Procarousel} from "./components/slideShow/carousel"
import './App.css'

function App(){
  return (
    <>
    <Procarousel />
    <Button>Log In!</Button>
    </>
  )
}

export default App
