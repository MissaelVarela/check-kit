import equipments from "./equipments";
import users from "./users";
import checklists from "./checklists";

export default class Data {

    static getUsers(){
        return users;
    }

    static getUser(id){
        const user = users.find(
            (item) => item.id === id
        );

        return user;
    }

    static getEquipments(){
        return equipments;
    }

    static getEquipment(id){
        const equipment = equipments.find(
            (item) => item.identificador === id
        );

        return equipment;
    }

    static getCheckLists(){
        return checklists;
    }

    static getCheckLists(id){
        const checklist = checklists.find(
            (item) => item.id === id
        );

        return checklist;
    }

}

