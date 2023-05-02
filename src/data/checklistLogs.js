export default [
    {
        id: 1,
        responsable: 1,
        // ...
        data: {
            sections: [
                {
                    sectionTitle: "title",
                    checkList: [
                        {
                            question: "¿...?",
                            answers: ["Sí"],
                            observations: "",
                        },
                        {
                            question: "¿...?",
                            answers: ["No"],
                            observations: "",
                        },
                        {
                            question: "¿...?",
                            answers: ["Verde", "Rojo"],
                            observations: "",
                        },
                        {
                            question: "¿...?",
                            answers: [
                                { question: "¿...?", answers: []},
                                { question: "¿...?", answers: []},
                            ],
                            observations: "",
                        },
                    ]
                }
            ]
        }
    },
]

// ESTE
const logEjemplo2 = {
    sections: [
        {
            number: 1,
            sectionTitle: "",
            checks: [
                {
                    number: 1,
                    question: "¿...?",
                    answers: ["Si"],
                    groups: null,
                },
                {
                    number: 2,
                    question: "¿...?",
                    answers: null,
                    groups: [
                        {
                            number: 1,
                            subQuestion: "",
                            answers: ["Si"],
                        }
                    ],
                },
            ],
        },
    ],
}

const logEjemplo = {
    checkListLog: [
        {
            section: 0,
            check: 0,
            group: null,
            question: "¿...?",
            answer: ["sí"],
            observations: null,
        },
        {
            section: 0,
            check: 1,
            group: null,
            question: "¿...?",
            answer: null,
            observations: null,
        },
        {
            section: 0,
            check: 1,
            group: 0,
            question: "¿...?",
            answer: ["sí"],
            observations: null,
        },
        {
            section: 0,
            check: 1,
            group: 1,
            question: "¿...?",
            answer: ["sí"],
            observations: null,
        },
    ]
};