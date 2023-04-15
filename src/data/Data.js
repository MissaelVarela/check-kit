import equipments from "./equipments";
import users from "./users";
import checklists from "./checklists";
import equipmentTypes from "./equipmentTypes";

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
            (item) => item.id === id
        );

        return equipment;
    }
    
    static getEquipmentsByType(typeId){
        const result = equipments.filter((element) => element.typeId === typeId )
        return result;
    }

    static getEquipmentTypes(){
        return equipmentTypes;
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

