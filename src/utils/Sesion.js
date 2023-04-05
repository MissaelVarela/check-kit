export default class Sesion {
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
}