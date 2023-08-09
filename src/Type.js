import React, { useState } from 'react';

const Type = () => {
  const [text, setText] = useState('');

  const handle = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handle}  placeholder="Type here..."/>
      <p>Character Count: {text.length}</p>
    </div>
  );
};

export default Type;
