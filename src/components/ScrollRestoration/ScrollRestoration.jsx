import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();
  // Creamos una clave única combinando pathname, search y hash
  const scrollKey = `${location.pathname}${location.search}${location.hash}`;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Función para guardar la posición actual del scroll
    const saveScrollPosition = () => {
      sessionStorage.setItem(scrollKey, window.scrollY.toString());
    };

    // Función para restaurar la posición del scroll
    const restoreScrollPosition = () => {
      const savedPositionStr = sessionStorage.getItem(scrollKey);
      if (savedPositionStr) {
        const savedPosition = parseInt(savedPositionStr, 10);
        setTimeout(() => {
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          window.scrollTo(0, Math.min(savedPosition, maxScroll));
        }, 300); // Delay para dar tiempo a que el DOM se renderice completamente
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Restauramos la posición al montar el componente
    restoreScrollPosition();

    // Usamos un throttling básico para actualizar el scroll cada 100ms
    let throttleTimeout = null;
    const handleScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          saveScrollPosition();
          throttleTimeout = null;
        }, 100);
      }
    };

    // Agregamos los event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("pageshow", restoreScrollPosition);

    // Guardamos la posición en el cleanup y removemos los listeners
    return () => {
      saveScrollPosition();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pageshow", restoreScrollPosition);
    };
  }, [scrollKey]);

  return null;
};

export default ScrollRestoration;
