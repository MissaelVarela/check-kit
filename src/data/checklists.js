
/*

0 => sin respuestas
1 => respuestas radio
2 => respuestas check varias
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
                question: "",
                checkList: [
                    {
                        id: 1,
                        question: "¿Cuenta con conexion AC?",
                        answerType: 1,
                        answers: [
                            "Si",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 2,
                        question: "¿Funciona correctamente el encendido y apagado?",
                        answerType: 1,
                        answers: [
                            "Sí",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 3,
                        question: "¿Cuenta con bateria?",
                        answerType: 1,
                        answers: [
                            "Funcionando",
                            "No carga",
                            "No cuenta con bateria",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        question: "¿El estado fisico actual del equipo es correcto?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 5,
                        question: "¿El funcionamineto del equipo es correcto?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 6,
                        question: "Seleccione el estado de los cables básicos del equipo",
                        answerType: 4,
                        elementsHeader: "Cables",
                        elements: [
                            "ECG",
                            "PNI",
                            "SPO2",
                            "TEMP",
                            "CO2",
                            "PI",
                            "BIS",
                        ],
                        answers: [
                            "Correcto",
                            "Dañado",
                            "Faltante",
                        ],
                        observations: "",
                    },
                    {
                        id: 7,
                        question: "Observaciones generales del equipo",
                        answerType: 0,
                        answers: [],
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
                question: "",
                checkList: [
                    {
                        id: 1,
                        question: "¿Cuenta con conexion AC?",
                        answerType: 1,
                        answers: [
                            "Si",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 2,
                        question: "¿Funciona correctamente el encendido y apagado?",
                        answerType: 1,
                        answers: [
                            "Sí",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 3,
                        question: "¿Cuenta con bateria?",
                        answerType: 1,
                        answers: [
                            "Funcionando",
                            "No carga",
                            "No cuenta con bateria",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        question: "¿El estado fisico actual del equipo es correcto?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 5,
                        question: "¿El funcionamineto del equipo es correcto?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 6,
                        question: "¿Funciona correctamente el TouchPad?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 7,
                        question: "¿Funciona correctamente el Vaporizador?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 8,
                        question: "Indique el estado del Cable Sensor de oxígeno",
                        answerType: 4,
                        answers: [
                            {
                                question: "Existe",
                                answers: [
                                    "Sí",
                                    "No",
                                ]
                            },
                            {
                                question: "Estado",
                                answers: [
                                    "Bueno",
                                    "Dañado",
                                ]
                            },
                        ],
                        observations: "",
                    },
                    {
                        id: 9,
                        question: "¿Cuanta con alguna fuga?",
                        answerType: 1,
                        answers: [
                            "Sí",
                            "No",
                        ],
                        observations: "",
                    },
                    {
                        id: 10,
                        question: "Observaciones generales del equipo",
                        answerType: 0,
                        answers: [],
                        observations: "",
                    },
                ]
            },
        ]
    },
];