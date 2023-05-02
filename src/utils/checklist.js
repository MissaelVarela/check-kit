import Sesion from "./Sesion.js"
import { insertCheckListLog } from '../api/checklist.js';

export async function insertLog(checklistId, equipmentId, responsableId, dataTime, authorizedById, log) {
    
    const result = await insertCheckListLog(checklistId, equipmentId, responsableId, dataTime, authorizedById, log);

    console.log(result)
    if (result) {
        console.log(result)
        return true;
    }
    else {
        throw new Error("Ningún usuario corresponde con los datos proporcionados.");
    }  
}

export function logout() {
    Sesion.setName(null);
    Sesion.setUserType(null);
}