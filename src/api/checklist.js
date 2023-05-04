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

export async function insertCheckListLog(checklistId, equipmentId, responsableId, dateTime, authorizedById, log) {

    // Creando la URL de la petición.
    const command = API_URL + "log/insert";

    // Creando el objeto que guardara la información a enviar.
    const data = new FormData();
    data.append('checklist', checklistId);
    data.append('equipment', equipmentId);
    data.append('responsableUser', responsableId);
    data.append('dateTime', dateTime);
    data.append('authorizedBy', authorizedById);
    data.append('log', JSON.stringify(log));

    console.log(checklistId);
    console.log(equipmentId);
    console.log(responsableId);
    console.log(dateTime);
    console.log(authorizedById);
    console.log(JSON.stringify(log));

    // Creando el cuarpo del metodo Post.
    const method = {
        method: 'POST',
        body: data,
    }

    // Enviando la petición.
    const response = await fetch(command, {
        method: "POST",
        body: data,
    })
    .then(
        (res) => { 
            if (res.ok) {
                return true;
                //return res.json();
            }
            else {
                try { var msg = res.json() }
                catch { var msg = res }
                
                throw new Error("Algo falló en la peticion al servidor. " + msg);
            }
            
        }
    )

    return response;
}

/*const response = await fetch(command, { method: "POST" })
    .then(res => {
        if (res.ok) { 
            try {
                console.log(res)
                return res.json();
            }
            catch(error) {
                throw new Error("No se pudo leer la respuesta del servidor correctamente.");
            }
        }
        else {
            throw new Error("Mensaje del servidor: " + (res.json()).error);
        }

        
    })
    .catch((error) => { 
        throw new Error("No se pudo realizar la operación. " + error.message) 
    });
    */