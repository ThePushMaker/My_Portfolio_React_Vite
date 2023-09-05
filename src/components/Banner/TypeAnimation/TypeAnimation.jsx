import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import './TypeAnimation.css'
function TypedText() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Web Developer', 
                'Web Designer',
                'YouTube Educator',
                'Code Blog Author'
               ],
      typeSpeed: 60, // Velocidad de escritura en milisegundos
      backSpeed: 25, // Velocidad de borrado en milisegundos
      loop: true, // Repetir el ciclo
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy(); // Destruir Typed.js al desmontar el componente
      };
    }
  }, []);

  return <span ref={typedRef}></span>;
}

function App() {
  return (
    <div className="App">
      <TypedText />
    </div>
  );
}

export default App;