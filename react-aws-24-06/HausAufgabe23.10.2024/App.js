import React, { useState } from 'react';
import CustomTextField from './components/CustomTextField';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Meine Webseite</h1>
      <CustomTextField
        placeholder="Gib hier deinen Text ein"
        value={text}
        onChange={handleTextChange}
      />
      <p>Eingegebener Text: {text}</p>
    </div>
  );
}

export default App;

  