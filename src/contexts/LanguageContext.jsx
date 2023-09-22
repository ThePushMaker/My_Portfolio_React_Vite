import { createContext, useContext, useEffect, useState } from 'react';


// context
export const LanguageContext = createContext();


export function LanguageProvider({ children }) {
  // Define el estado o las funciones que deseas compartir
  const [language, setLanguage] = useState("")

  // useEffect(() => {
    const languageCode = navigator.language;
    const parts = languageCode.split('-');
    const language1 = parts[0];
    setLanguage(language1);
  // }, []); // Este efecto se ejecutará solo una vez al montar el componente

  // Puedes incluir otras funciones o lógica aquí

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );

}