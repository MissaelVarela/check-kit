
/*
AnswerType
0 => sin respuestas
1 => respuestas radio button (seleccionar solo una)
2 => respuestas check box (seleccionar varias)
3 => respuestas combo box
4 => respuestas tabla

*/

export default [
    {
        id: 1,
        equipmentId: 1,
        sections: [
            {
                id: 1,
                sectionTitle: "Sección 1",
                checkList: [
                    {
                        id: 1,
                        question: "¿Cuenta con conexión AC?",
                        answerType: 1,
                        answers: [
                            "Sí",
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
                        question: "Estado de la batería",
                        answerType: 1,
                        answers: [
                            "Cargada",
                            "No cargada",
                            "No cuenta con bateria",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        question: "¿El estado físico actual del equipo es correcto?",
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
                sectionTitle: "Sección 1",
                checkList: [
                    {
                        id: 1,
                        question: "¿Cuenta con conexión AC?",
                        answerType: 1,
                        answers: [
                            "Sí",
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
                        question: "Estado de la batería",
                        answerType: 1,
                        answers: [
                            "Cargada",
                            "No cargada",
                            "No cuenta con bateria",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        question: "¿El estado físico actual del equipo es correcto?",
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


    {
        id: 3,
        equipmentId: 3,
        sections: [
            {
                id: 1,
                sectionTitle: "Sección 1",
                checkList: [
                    {
                        id: 1,
                        question: "¿Cuenta con conexión AC?",
                        answerType: 1,
                        answers: [
                            "Sí",
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
                        question: "Estado de la batería",
                        answerType: 1,
                        answers: [
                            "Cargada",
                            "No cargada",
                            "No cuenta con bateria",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        question: "¿El estado físico actual del equipo es correcto?",
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
                        question: "¿Cuenta con electrodos?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 7,
                        question: "¿Cuenta con parches?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 8,
                        question: "Observaciones generales del equipo",
                        answerType: 0,
                        answers: [],
                        observations: "",
                    },
                ]
            },
        ]
    },
    {
        id: 4,
        equipmentId: 4,
        sections: [
            {
                id: 1,
                sectionTitle: "Sección 1",
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
                        question: "Estado de la bateria",
                        answerType: 1,
                        answers: [
                            "Cargada",
                            "No cargada",
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
                        question: "¿Cuenta con electrodos?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 7,
                        question: "¿El ECG cuenta con papel milimetrado?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 8,
                        question: "¿Los botones funcionan correctamente?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 9,
                        question: "Seleccione el estado de los cables básicos del equipo",
                        answerType: 4,
                        elementsHeader: "Cables de",
                        elements: [
                            "Alimentación",
                            "Electrodos precordiales",
                            "Electrodos perifericos",
                        ],
                        answers: [
                            "Correcto",
                            "Dañado",
                            "Faltante",
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
    {
        id: 5,
        equipmentId: 5,
        sections: [
            {
                id: 1,
                sectionTitle: "Sección 1",
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
                        question: "Estado de la bateria",
                        answerType: 1,
                        answers: [
                            "Cargada",
                            "No cargada",
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
                        question: "¿Cuenta con pinzas?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 7,
                        question: "¿Funciona correctamente la camara?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 8,
                        question: "¿Funciona correctamente el foco?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 9,
                        question: "¿Funciona correctamente el display?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
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
    {
        id: 6,
        equipmentId: [6, 7, 8, 9],
        sections: [
            {
                id: 1,
                sectionTitle: "Sección 1",
                checkList: [
                    {
                        id: 1,
                        question: "¿El estado fisico actual del modelo anatomico es correcto?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 2,
                        question: "¿El modelo anatomico se encuentra completo?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 3,
                        question: "¿El modelo anatomico se encuentra limpio?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 4,
                        question: "¿El modelo anatomico se encuentra disponible?",
                        answerType: 1,
                        answers: [
                            "Cumple",
                            "No cumple (indique por que)",
                        ],
                        observations: "",
                    },
                    {
                        id: 5,
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