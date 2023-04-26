import { createContext } from "react";

// Contexto para saber cual seccion del drawer esta seleccionada.
const DrawerContext = createContext({ 
    activeDrawerSection: null, 
    setActiveDrawerSection: null,
});

export default DrawerContext;