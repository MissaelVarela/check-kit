
/*
User types:
    1 => Adminitrador
    2 => Supervisor (Maestros)
    3 => Supervisado (Alumnos/tecnicos registrados)

    4 => Supervisado publico (Alumnos/tecnicos no registrados )
    5 => Invitado (Lector)
*/

export default [
    {
        id: 1,
        user: "Nicole",
        pass: "cacahuate",
        userType: 2,
        name: "Nicole Balvaneda",
        lastName: "Cruz Aguirre",
        group: "",
    },
    {
        id: 2,
        user: "David",
        pass: "12345",
        userType: 3,
        name: "Jesus David",
        lastName: "Garcias Torres",
        group: "",
    },
    {
        id: 3,
        user: "Admin",
        pass: "admin",
        userType: 1,
        name: "Nicole Balvaneda",
        lastName: "Cruz Aguirre",
        group: "",
    },
    {
        id: 4,
        user: "MtroAntonio",
        pass: "patito",
        userType: 3,
        name: "Antonio Rafael",
        lastName: "Hernandez Paniagua",
        group: "",
    },
    {
        id: 5,
        user: "MtraLeslie",
        pass: "12345",
        userType: 2,
        name: "Leslie Yunuen",
        lastName: "Saldaña Ruiz",
        group: "",
    },
    {
        id: 6,
        user: "Alumno",
        pass: "12345",
        userType: 3,
        name: "Alumno",
        lastName: "Alumno",
        group: "",
    },
    {
        id: 6,
        user: "a",
        pass: "a",
        userType: 1,
        name: "Admin2",
        lastName: "Admin2",
        group: "",
    }
];