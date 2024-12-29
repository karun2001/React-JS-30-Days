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
}

export default App;