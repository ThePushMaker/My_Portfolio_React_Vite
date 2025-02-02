import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const location = useLocation();
  // Clave única para cada ruta (incluye pathname, search y hash)
  // const scrollKey = `${location.pathname}${location.search}${location.hash}`;
  const scrollKey = `${location.pathname}${location.search}`;
  const throttleTimeoutRef = useRef(null);

  useEffect(() => {
    // se ejecuta cuando se monta el componente
    // Desactivamos la restauración automática del navegador
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saveScrollPosition = () => {
      sessionStorage.setItem(scrollKey, window.scrollY.toString());
    };

    const restoreScrollPosition = () => {
      const savedPositionStr = sessionStorage.getItem(scrollKey);
      const savedPosition = savedPositionStr ? parseInt(savedPositionStr, 10) : 0;
      setTimeout(() => {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        window.scrollTo(0, Math.min(savedPosition, maxScroll));
      }, 300); // Delay para esperar a que el DOM se renderice
    };

    // Restauramos la posición cuando se monta el componente
    restoreScrollPosition();

    // Throttling de 100ms para evitar llamadas excesivas
    const handleScroll = () => {
      if (!throttleTimeoutRef.current) {
        throttleTimeoutRef.current = setTimeout(() => {
          saveScrollPosition();
          throttleTimeoutRef.current = null;
        }, 100);
      }
    };

    // Agregamos los event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("pageshow", restoreScrollPosition);

    // Limpiamos los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pageshow", restoreScrollPosition);
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, [scrollKey]);

  return null;
};

export default ScrollRestoration;
