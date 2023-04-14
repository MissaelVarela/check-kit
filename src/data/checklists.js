export default [
    {
        id: 1,
        equipmentId: 1,
        sections: [
            {
                id: 1,
                title: "Sección 1",
                checkList: [
                    {
                        id: 1,
                        title: "¿Funciona correctamente la bateria del equipo?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple",
                        ],
                        observations: "",
                    },
                    {
                        id: 2,
                        title: "¿Los cables estan completos?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple",
                        ],
                        observations: "",
                    },
                    {
                        id: 3,
                        title: "¿El estado fisico es aceptable?",
                        inputType: 1,
                        options: [
                            "Cumple",
                            "No cumple",
                        ],
                        observations: "",
                    }
                ]
            },
        ]
    },
];