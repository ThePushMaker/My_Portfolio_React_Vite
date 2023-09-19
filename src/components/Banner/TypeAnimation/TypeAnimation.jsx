import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import './TypeAnimation.css'
import { useTranslation } from 'react-i18next';
function TypedText(typeAnimationArray) {
  const typedRef = useRef(null);
  
  const Textarray =  Object.values(typeAnimationArray);
  
  useEffect(() => {
    const options = {
      strings: [... Textarray],
      typeSpeed: 80, // Velocidad de escritura en milisegundos
      backSpeed: 25, // Velocidad de borrado en milisegundos
      loop: true, // Repetir el ciclo
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy(); // Destruir Typed.js al desmontar el componente
      };
    }
  }, [typeAnimationArray]);

  return <span ref={typedRef}></span>;
}

function App(typeAnimationArray) {
  return (
    <div className="App">
      <TypedText {... typeAnimationArray}/>
    </div>
  );
}

export default App;