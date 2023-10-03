import { createContext, useContext, useState } from 'react';


// context
const LanguageContext = createContext();


function LanguageProvider ({ children }) {
  // Define el estado o las funciones que deseas compartir
  const [language, setLanguage] = useState(null)

  const updateLanguage = (newData) => {
    setLanguage(newData);
  };

  // Puedes incluir otras funciones o lógica aquí

  return (
    <LanguageContext.Provider value = {{ language, updateLanguage }}>
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