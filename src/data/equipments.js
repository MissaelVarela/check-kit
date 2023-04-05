
// SIMULACIÓN de los datos provenientes de una base de datos.

const imgDirectory = require.context('./img');

export default [
    {
        tipo: "Camilla hospitalaria",
        nombre: "",
        identificador: "CAM-1",
        descripcion: "Nanofort Mkz-camhosc07 color Azul Manual Reclinable con Accesorios",
        area: "Laboratorio medico",
        imagen: imgDirectory("./CAM-1.jpeg"),
    },
    {
        tipo: "Monitor de signos vitales",
        nombre: "Sobismart12",
        identificador: "MSV-1",
        descripcion: "SONOSMART12 (6 Parámetros)",
        area: "Laboratorio medico",
        imagen: imgDirectory("./MSV-1.jpg"),
    },
    {
        tipo: "Monitor de signos vitales",
        nombre: "Mod 08A",
        identificador: "MSV-2",
        descripcion: "Mod 08A (NIBP/Spo2/Cardiograma)",
        area: "Laboratorio medico",
        imagen: imgDirectory("./MSV-2.jpg"),
    },
    {
        tipo: "Monitor de signos vitales",
        nombre: "mindray uMEC10",
        identificador: "MSV-3",
        descripcion: "MONITOR DE PACIENTE SERIE UMEC",
        area: "Laboratorio medico",
        imagen: imgDirectory("./MSV-3.jpg"),
    },
    {
        tipo: "Desfibrilador",
        nombre: "Sono AED Automatico",
        identificador: "DES-1",
        descripcion: "Sono-AED-Automatico",
        area: "Laboratorio medico",
        imagen: imgDirectory("./DES-1.jpg"),
    },
    {
        tipo: "Desfibrilador",
        nombre: "Sono-AED-PRO",
        identificador: "DES-2",
        descripcion: "Desfibrilador Sono-AED-PRO",
        area: "Laboratorio medico",
        imagen: imgDirectory("./DES-2.jpg"),
    },
    {
        tipo: "Máquina De Anestesia",
        nombre: "",
        identificador: "MDA-1",
        descripcion: "Mindray WATOEX-55 color blanco",
        area: "Laboratorio medico",
        imagen: imgDirectory("./MDA-1.jpg"),
    },
];