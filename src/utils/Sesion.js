export default class Sesion {

    static setActive(value) {
        this.active = value
    }

    static isActive() {
        return this.active
    }

    static setUserType(userType) {
        this.userType = userType
    }

    static getUserType() {
        return this.userType
    }

    static setName(name) {
        this.nom = name
    }

    static getName() {
        return this.nom
    }

    static setPass(pass) {
        this.pass = pass
    }

    static getPass() {
        return this.pass
    }

    static setUser(value){
        this.user = value
    }

    static getUser(){
        return this.user
    }

    static setUserId(value){
        this.userId = value
    }

    static getUserId(){
        return this.userId
    }
}