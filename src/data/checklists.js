
/*

0 => sin respuestas
1 => respuestas check
2 => respuestas selecionando varias
3 => combo box respuestas
4 => respuestas tabla


*/

export default [
    {
        id: 1,
        equipmentId: 1,
        sections: [
            {
                id: 1,
                title: "",
                checkList: [
                    {
                        id: 1,
                        title: "¿Cuenta con conexion AC?",
                        inputType: 1,
                        options: [
                            "Si",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 2,
                        title: "¿Funciona correctamente el encendido y apagado?",
                        inputType: 1,
                        options: [
                            "Sí",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 3,
                        title: "¿Cuenta con bateria?",
                        inputType: 1,
                        options: [
                            "Funcionando",
                            "No carga",
                            "No cuenta con bateria",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        title: "¿El estado fisico actual del equipo es correcto?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 5,
                        title: "¿El funcionamineto del equipo es correcto?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 6,
                        title: "Seleccione el estado de los cables básicos del equipo",
                        inputType: 4,
                        options: [
                            "ECG",
                            "PNI",
                            "SPO2",
                            "TEMP",
                            "CO2",
                            "PI",
                            "BIS",
                        ],
                        observations: "",
                    },
                    {
                        id: 7,
                        title: "Observaciones generales del equipo",
                        inputType: 0,
                        options: [],
                        observations: "",
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        equipmentId: 2,
        sections: [
            {
                id: 1,
                title: "",
                checkList: [
                    {
                        id: 1,
                        title: "¿Cuenta con conexion AC?",
                        inputType: 1,
                        options: [
                            "Si",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 2,
                        title: "¿Funciona correctamente el encendido y apagado?",
                        inputType: 1,
                        options: [
                            "Sí",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 3,
                        title: "¿Cuenta con bateria?",
                        inputType: 1,
                        options: [
                            "Funcionando",
                            "No carga",
                            "No cuenta con bateria",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        title: "¿El estado fisico actual del equipo es correcto?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 5,
                        title: "¿El funcionamineto del equipo es correcto?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 6,
                        title: "¿Funciona correctamente el TouchPad?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 7,
                        title: "¿Funciona correctamente el Vaporizador?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 8,
                        title: "Indique el estado del Cable Sensor de oxígeno",
                        inputType: 4,
                        options: [
                            {
                                title: "Existe",
                                options: [
                                    "Sí",
                                    "No",
                                ]
                            },
                            {
                                title: "Estado",
                                options: [
                                    "Bueno",
                                    "Dañado",
                                ]
                            },
                        ],
                        observations: "",
                    },
                    {
                        id: 9,
                        title: "¿Cuanta con alguna fuga?",
                        inputType: 1,
                        options: [
                            "Sí",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 10,
                        title: "Observaciones generales del equipo",
                        inputType: 0,
                        options: [],
                        observations: "",
                    },
                ]
            },
        ]
    },
];