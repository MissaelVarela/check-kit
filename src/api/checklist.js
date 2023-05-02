import { API_URL } from "@env";

export async function getCheckListLogs() {
    const response = await fetch(API_URL + "log/list?limit=20")
    .then(res => {
        try {
            return res.json();
        }
        catch(error) {
            throw new Error("Algo falló al tratar de leer el mensaje enviado por el servidor.");
        }
    })
    .catch(() => { 
        throw new Error("Algo falló con la respuesta del servidor.") 
    });

    return response;
}

export async function getCheckListLog(id) {
    const response = await fetch(API_URL + "log/list?id=" + id)
    .then(res => {
        try {
            return res.json();
        }
        catch(error) {
            throw new Error("Algo falló al tratar de leer el mensaje enviado por el servidor.");
        }
    })
    .catch(() => { 
        throw new Error("Algo falló con la respuesta del servidor.") 
    });

    return response;
}

export async function insertCheckListLog(checklistId, equipmentId, responsableId, dataTime, authorizedById, data) {
    
    // NO ACEPTA ESPACIOS: Soliona usando el metodo Post...
    const command = API_URL + `log/insert?checklist=${checklistId}&equipment=${equipmentId}&responsableUser=${responsableId}&dateTime=${dataTime}&authorizedBy=${authorizedById}&data=${JSON.stringify(data)}`;

    console.log(command)

    const response = await fetch(command)
    .then(res => {
        try {
            return res.json();
        }
        catch(error) {
            throw new Error("Algo falló al tratar de leer el mensaje enviado por el servidor.");
        }
    })
    .catch(() => { 
        throw new Error("Algo falló con la respuesta del servidor.") 
    });

    return response;
}