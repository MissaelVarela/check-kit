//import { API_URL } from "@env";
const API_URL = process.env.API_URL;

const post = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ key: "" }), // body data type must match "Content-Type" header
}
const get = {
    method: "GET",
    body: JSON.stringify({ user: "user", pass: "password" }), // body data type must match "Content-Type" header
}

export async function auth(user, password) {
    const response = await fetch(API_URL + "user/auth?user=" + user + "&pass=" + password )
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