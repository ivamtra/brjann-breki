import logo from "./logo.svg";
import "./App.css";
import { IoIosCall } from "react-icons/io";
import {MdCallEnd } from 'react-icons/md'
import brjann from "./images/brjansi.jpeg";
import { useEffect, useState } from "react";
import sound from './sounds/saellEddu.mp3'
const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};



function App() {

  let audio = new Audio(sound)
  useEffect(() => console.log(audio))

  const start = () => {
    audio.play()
  }
  const hangUp = () => {
    audio.pause()
  }

  return (
    <div className="wrapper">
      <div className="brjansi-container">
        <img className="brjann-img" src={brjann} alt="" />
      </div>
      <div className="call-container">
        <IoIosCall onClick={() => start()} className="call-button"/>
        <MdCallEnd onClick={() => hangUp()} className="call-button hang-up"/>

      </div>
    </div>
  );
}

export default App;
