
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
        pass: "12345",
        userType: 2,
        name: "Nicole Balvaneda",
        lastName: "Cruz Aguirre",
    },
    {
        id: 2,
        user: "David",
        pass: "12345",
        userType: 3,
        name: "David",
        lastName: "",
    },
    {
        id: 3,
        user: "Admin",
        pass: "admin",
        userType: 1,
        name: "Nicole Balvaneda",
        lastName: "Cruz Aguirre",
    },
    {
        id: 4,
        user: "LaboratorioMedico",
        pass: "12345",
        userType: 3,
        name: "",
        lastName: "",
    },
];