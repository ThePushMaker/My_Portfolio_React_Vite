import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollRestoration = () => {
  const location = useLocation();
  
  useEffect(() => {
    //configurar el historial para manejar manualmente la restauración del scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // Función para guardar la posición actual del scroll en sessionStorage
    const saveScrollPosition = () => {
      sessionStorage.setItem(location.pathname, window.scrollY.toString());
    };
    
    // funcion para restaurar la posición del scroll
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(location.pathname);
      if (savedPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition, 10));
        }, 100); // Espera 100ms antes de restaurar la posición del scroll para asegurarse de que el DOM este listo
      } else {
        window.scrollTo(0, 0); // si no hay posición guardada, ir a inicio
      }
    };
    
    // Restaurar la posición al montar el componente
    restoreScrollPosition();
    
    // Guardar la posición actual del scroll antes de la recarga o al cambiar de ruta
    window.addEventListener("beforeunload", saveScrollPosition);
    
    // limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
    
  }, [location.pathname]);
  
  return null;
};

export default ScrollRestoration;