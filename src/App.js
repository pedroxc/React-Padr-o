import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);

  function handleAdd() {
    setTech([...tech, 'node.js']);
  }
  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
