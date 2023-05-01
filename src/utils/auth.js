import Sesion from "./Sesion.js"
import { auth } from '../api/auth.js';

export async function login(user, password) {
    
    const authenticatedUser = await auth(user, password);

    if (authenticatedUser &&  authenticatedUser[0]) {
        Sesion.setName(authenticatedUser[0].name + " " + authenticatedUser[0].lastName);
        Sesion.setUserType(authenticatedUser[0].userType);
        Sesion.setUser(authenticatedUser[0].userName);
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