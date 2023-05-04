import { API_URL } from "@env";

export async function getReservationsApi() {
    const response = await fetch(API_URL + "reservation/list?limit=20")
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

// IMPLEMENTAR: Obtener una reservation en especifico.
export async function getReservationApi(id) {
    const response = await fetch(API_URL + "reservation/list?id=" + id)
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

export async function insertReservationApi(startDate, endDate, equipmentId, userId) {

    // Creando la URL de la petición.
    const command = API_URL + "reservation/insert";

    // Creando el objeto que guardara la información a enviar.
    const data = new FormData();
    data.append('start', startDate);
    data.append('end', endDate);
    data.append('equipment', equipmentId);
    data.append('user', userId);

    console.log(startDate);
    console.log(endDate);
    console.log(equipmentId);
    console.log(userId);

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