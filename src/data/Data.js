import equipments from "./equipments";
import users from "./users";
import checklists from "./checklists";
import equipmentTypes from "./equipmentTypes";
import reservations from "./reservations";

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

    static getReservations(type, equipment, year, month, date){
        const reservationsResult = reservations.filter(
            (item) => {
                const isCorrectDate = item.year === year && item.month - 1 === month && item.date === date;
                
                if (isCorrectDate) {
                    const isValid = (type === -1 || item.equipment.typeId === type) && (equipment === -1 || item.equipment.id === equipment);
                    
                    if (isValid) {
                        return item;
                    }
                }
                
            });

        return reservationsResult;
    }

}

