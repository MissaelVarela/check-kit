import { createContext } from "react";

// Contexto para saber cual seccion del drawer esta seleccionada.
const LogContext = createContext({ 
    sections: null
});

export default LogContext;