
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
        user: "a",
        pass: "a",
        userType: 1,
        name: "Admin",
        lastName: "Admin",
        group: "",
    },
    {
        id: 2,
        user: "Nicole",
        pass: "cacahuate",
        userType: 2,
        name: "Nicole Balvaneda",
        lastName: "Cruz Aguirre",
        group: "",
    },
    {
        id: 3,
        user: "David",
        pass: "12345",
        userType: 2,
        name: "Jesus David",
        lastName: "Garcias Torres",
        group: "",
    },
    {
        id: 4,
        user: "MtroAntonio",
        pass: "12345",
        userType: 2,
        name: "Antonio Rafael",
        lastName: "Hernandez Paniagua",
        group: "",
    },
    {
        id: 5,
        user: "Alumno",
        pass: "12345",
        userType: 3,
        name: "José",
        lastName: "Valdez",
        group: "",
    },
    {
        id: 6,
        user: "MtraLeslie",
        pass: "12345",
        userType: 2,
        name: "Leslie Yunuen",
        lastName: "Saldaña Ruiz",
        group: "",
    },
    
];