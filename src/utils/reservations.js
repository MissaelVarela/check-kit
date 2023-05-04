import { insertReservationApi, getReservationsApi } from "../api/reservations";

export async function insertReservation(startDate, endDate, equipmentId, userId) {
    
    // Falta detectar bien cuando no es posible agregar el el registro. Posiblemente se arregle en el backend mandando errores.

    // Aunque se mande el dateTime, en la base de datos se asignara.
    const response = await insertReservationApi(startDate, endDate, equipmentId, userId)
    .catch((error) => { console.log(error); return false; });

    if (response) {
        console.log("Respuesta del servidor:", response)
        return true;
    }
    else {
        return false;
    }  
}

export async function getReservations() {
    const logs = await getReservationsApi()

    if (logs) {
        return logs;
    }
    else {
        return false;
    }
}