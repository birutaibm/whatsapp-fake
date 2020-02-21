import React from 'react';
import { MdArrowBack, MdMoreVert, MdCall, MdKeyboardVoice } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

import './App.css';
import Date from './conversation/Date';
import Encrypted from './conversation/Encrypted';
import MyMessage from './conversation/MyMessage';

function App() {
  const myMessages = [{
/*     text: 'linha 1',
    time: '10:10',
    status: 'read',
  }, {
    text: 'linha 2 \n linha 3 que é mais longa',
    time: '10:15',
    status: 'deliver',
  }, {
 */    audio: {
      duration: 3*60+20, // in seconds
      listened: true, // default is false
    },
    time: '10:16',
    status: 'send',
  }, {
    //text: 'l 5',
    time: '10:19',
    status: 'sending',
    image: '/img/example.jpeg',
/*   }, {
    text: 'linha 6 \nJunto com um texto bem mais longo do que o que seria normal...',
    time: '10:20',
//    status: 'sending',
 */  }];
  return (
    <div className="App">
      <header className="App-header">
        <MdArrowBack size={24} />
        <img className="logo" src="/img/person.png" alt=""/>
        <div className="info">
          <div className="name">Rafael Arantes</div>
          <div className="description">online</div>
        </div>
        <FaVideo size={24} />
        <MdCall size={24} />
        <MdMoreVert size={24} />
      </header>
      <main>
        <img src="/img/back.jpg" alt=""/>
        <div className="conversation-container">
          <Encrypted type='person'/>
          <Date value='Hoje' />
          <MyMessage value={myMessages} />
        </div>
        <div className="footer">
          <img src="/img/text-bar.png" alt=""/>
          <div className="speaker"><MdKeyboardVoice size={24} /></div>
        </div>
      </main>
    </div>
  );
}

export default App;
