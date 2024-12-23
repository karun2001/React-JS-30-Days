import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from '../src/assets/logo image.png';

function App() {

  return (
    <div id="keyboard" >
      <img id="logo" src={logo} alt="brand logo"/>
      <div id='keys'>
        <div className='key'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key'></div>
        <div className='key black'></div>
        <div className='key black'></div>
        <div className='key black'></div>
      </div>  
    </div>
  )
}

export default App
