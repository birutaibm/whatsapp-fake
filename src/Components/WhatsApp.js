import React from 'react';

import './WhatsApp.css';
import Header from './Header';
import Footer from './Footer';
import Conversation from './Conversation';

export default function WhatsApp({myRef}) {

  return (
    <div ref={myRef} className="WhatsApp">
      <Header />
      <main>
        <img src="/img/back.jpg" alt=""/>
        <Conversation partiner='group'/>
        <Footer />
      </main>
    </div>
  );
};
