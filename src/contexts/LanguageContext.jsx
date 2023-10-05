import { createContext, useContext, useState } from 'react';


// context
const LanguageContext = createContext();


function LanguageProvider ({ children }) {
  // Define el estado o las funciones que deseas compartir
  const [languageContext, setLanguageContext] = useState(null)

  const updateLanguageContext = (newData) => {
    setLanguageContext(newData);
  };

  // Puedes incluir otras funciones o lógica aquí

  return (
    <LanguageContext.Provider value = {{ languageContext, updateLanguageContext }}>
      {children}
    </LanguageContext.Provider>
  );

}

// custom hook para acceder al contexto
function useMyLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context){
    throw new Error('useMyLanguageContext debe usarse dentro de un MyContextProvider');
  }
  return context;
}
export { LanguageContext, useMyLanguageContext, LanguageProvider };