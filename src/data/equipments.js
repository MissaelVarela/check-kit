
// SIMULACIÓN de los datos provenientes de una base de datos.

const imgDirectory = require.context('./img');
const equipmentsDirectory = require.context('./img/equipments');

export const equipments = [
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

export default [
    {
        id: 1,
        category: "Equipos medicos",
        typeId: 1,
        type: "Monitor SV",
        name: "213034910942",
        brand: "Zoncare",
        model: "PM-7000D",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./monitor-sv.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "03/04/2023",
            nextMaintenace: "",
        },
    },
    {
        id: 2,
        category: "Equipos medicos",
        typeId: 2,
        type: "Maquina de anestesia",
        name: "213020411707",
        brand: "GSM",
        model: "GSM-11",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./maquina-de-anestesia.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "03/04/2023",
            nextMaintenace: "",
        },
    },
    {
        id: 3,
        category: "Equipos medicos",
        typeId: 3,
        type: "Entrenador de desfibrilador",
        name: "213016111705",
        brand: "AEDPLUS",
        model: "trainer 2",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./entrenador-de-desfibrilador.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "03/04/2023",
            nextMaintenace: "",
        },
    },
    {
        id: 4,
        category: "Equipos medicos",
        typeId: 4,
        type: "Electrocardiograma",
        name: "",
        brand: "Mindray",
        model: "BeneHeart R3",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./ecg.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "",
            nextMaintenace: "",
        },
    },
    {
        id: 5,
        category: "Equipos medicos",
        typeId: 5,
        type: "Entrenador de Cirugia",
        name: "213024910945",
        brand: "3-DMED",
        model: "T5-HD MITS",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./entrenador-de-cirugia.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "",
            nextMaintenace: "",
        },
    },
    {
        id: 6,
        category: "Modelos Anatomicos",
        typeId: 6,
        type: "Modelo",
        name: "Cerebro",
        brand: "",
        model: "",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./cerebro.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "",
            nextMaintenace: "",
        },
    },
    {
        id: 7,
        category: "Modelos Anatomicos",
        typeId: 6,
        type: "Modelo",
        name: "Corazón",
        brand: "",
        model: "",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./corazon.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "",
            nextMaintenace: "",
        },
    },
    {
        id: 8,
        category: "Modelos Anatomicos",
        typeId: 6,
        type: "Modelo",
        name: "Esqueleto",
        brand: "",
        model: "",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./esqueleto.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "",
            nextMaintenace: "",
        },
    },
    {
        id: 9,
        category: "Modelos Anatomicos",
        typeId: 6,
        type: "Modelo",
        name: "Anatomico",
        brand: "",
        model: "",
        series: "",
        description: "",
        location: "Laboratorio ing. biomedica",
        image: equipmentsDirectory("./modelo-anatomico.jpg"),
        group: [],
        maintenance: {
            state: 1,
            descripcionState: "",
            lastMaintenace: "",
            nextMaintenace: "",
        },
    },
];