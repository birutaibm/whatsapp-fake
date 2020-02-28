import React from 'react';

import './App.css';
import WhatsApp from './Components/WhatsApp';
import SaveButton from './SaveButton';

export default function App() {
  const ref = React.createRef();

  return (
    <div className="App">
      <SaveButton childRef={ref} />
      <WhatsApp myRef={ref} />
    </div>
  );
};
