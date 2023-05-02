import Sesion from "./Sesion.js"
import { insertCheckListLog } from '../api/checklist.js';

export async function insertLog(checklistId, equipmentId, responsableId, dataTime, authorizedById, log) {
    
    const response = await insertCheckListLog(checklistId, equipmentId, responsableId, dataTime, authorizedById, log);

    if (response) {
        console.log("Respuesta del servidor:", response)
        return true;
    }
    else {
        throw new Error("No hubo respuesta del servidor.");
    }  
}

export function logout() {
    Sesion.setName(null);
    Sesion.setUserType(null);
}