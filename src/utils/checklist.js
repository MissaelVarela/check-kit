import Sesion from "./Sesion.js"
import { insertCheckListLog } from '../api/checklist.js';

export async function insertLog(checklistId, equipmentId, responsableId, dateTime, authorizedById, log) {
    
    // Falta detectar bien cuando no es posible agregar el el registro. Posiblemente se arregle en el backend mandando errores.

    // Aunque se mande el dateTime, en la base de datos se asignara.
    const response = await insertCheckListLog(checklistId, equipmentId, responsableId, dateTime, authorizedById, log)
    .catch((error) => { console.log(error); return false; });

    if (response) {
        console.log("Respuesta del servidor:", response)
        return true;
    }
    else {
        return false;
    }  
}

export function logout() {
    Sesion.setName(null);
    Sesion.setUserType(null);
}