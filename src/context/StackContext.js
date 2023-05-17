import { createContext } from "react";

// Contexto para saber cual seccion del drawer esta seleccionada.
const StackContext = createContext({ 
    goBack: null, 
    setGoBack: null,
    pop: null,
});

export default StackContext;