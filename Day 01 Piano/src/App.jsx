import { useEffect, useState } from 'react';
import Key from './Components/Key';
import './App.css'
import logo from '../src/assets/logo image.png';
import c6 from './assets/tones/c6.mp3';
import d6 from './assets/tones/d6.mp3';
import e6 from './assets/tones/e6.mp3';
import f6 from './assets/tones/f6.mp3';
import g6 from './assets/tones/g6.mp3';
import a6 from './assets/tones/a6.mp3';
import b6 from './assets/tones/b6.mp3';


function App() {
  const [sounds, setSounds] = useState([
    {
      name: 'c6',
      sound: c6,
      key: 'A',
    },
    {
      name: 'd6',
      sound: d6,
      key: 'S',
    },
    {
      name: 'e6',
      sound: e6,
      key: 'D',
    },
    {
      name: 'f6',
      sound: f6,
      key: 'F',
    },
    {
      name: 'g6',
      sound: g6,
      key: 'J',
    },
    {
      name: 'a6',
      sound: a6,
      key: 'K',
    },
    {
      name: 'b6',
      sound: b6,
      key: 'L',
    }
  ]);

  return(
    <div id="keyboard" >
      <img id="logo" src={logo} alt="brand logo"/>
      <div id='keys'>
      {
        sounds.map((object)=>{
          return(
            <Key sound={object.sound} name={object.name} letter={object.key} key={object.key}/>
          )     
        })
      }
      </div>
    </div>
  )

  /*
useEffect(()=>{
  document.addEventListener("keydown",(event)=>{
    console.log(event.key);  

    switch(event.key){

      case 'a': let c62 = new Audio(c6);
                c62.play();
                break;

      case 's': let d62 = new Audio(d6);
                d62.play();
                break;

      case 'd': let e62 = new Audio(e6);
                e62.play();
                break;

      case 'f': let f62 = new Audio(f6);
                f62.play();
                break;

      case 'j': let g62 = new Audio(g6);
                g62.play();
                break;

      case 'k': let a62 = new Audio(a6);
                a62.play();
                break;    
                
      case 'l': let b62 = new Audio(b6);
                b62.play();
                break;
    }                       
  })                   
})  

  return (
    <div id="keyboard" >
      <img id="logo" src={logo} alt="brand logo"/>
      <div id='keys'>
        <div className='key' data-key='c6' > <span>a</span></div>
        <div className='key black' data-key='d6'><span>s</span></div>
        <div className='key black' data-key='e6'> <span>d</span> </div>
        <div className='key' data-key='f6'> <span>f</span> </div>
        <div className='key black' data-key='g6'> <span>j</span> </div>
        <div className='key black' data-key='a6'> <span>k</span> </div>
        <div className='key black' data-key='b6'> <span>l</span> </div>
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

  */
}

export default App;