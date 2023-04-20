import Data from '../data/Data.js';
import Sesion from "./Sesion.js"

const users = Data.getUsers();

export default function auth(userName, password) {
    
    const user = users.find(element => element.user == userName);
    if (user) {
        if (user.pass === password)
        {
            Sesion.setName(user.user);
            Sesion.setPass(user.pass);
            Sesion.setUserType(user.userType);
            return true;
        }
    }

    return false;
}

