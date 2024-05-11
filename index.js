#! /Usr/bin/env node
import inquirer from "inquirer";
async function AskQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "Question1",
            message: "Which of the following companies has developed Typescript?",
            choices: ["Microsoft", "Oracle", "Typescript", "Amazon"],
        },
        {
            type: "list",
            name: "Question2",
            message: "What is the typing principle of Typescript?",
            choices: ["Gradual", "Duck", "Dynamica", "All of the Above"],
        },
        {
            type: "list",
            name: "Question3",
            message: "which if the following file name is the extension for Typescript?",
            choices: [".tt", ".tsx", ".ts", "node"],
        },
        {
            type: "list",
            name: "Question4",
            message: "Which of the computer programming language below has influenced the creation of Typescript?",
            choices: ["javascript", "c+", "Java", "All of the Above"],
        },
    ]);
    const marks = 10;
    const fail = 0;
    if (answers.Question1 === "Microsoft") {
        console.log("Correct Answer");
    }
    else
        () => {
            console.log("Wrong Answer");
        };
    if (answers.Question2 === "Dynamic") {
        console.log("Correct Answer");
    }
    else {
        console.log("Wrong Answer");
    }
    if (answers.Question3 === ".ts") {
        console.log("Correct Answer");
    }
    else {
        console.log("Wrong Answer");
    }
    if (answers.Question4 === "JavaScript") {
        console.log("Correct Answer");
    }
    else {
        console.log("Wrong Answer");
    }
}
AskQuestion();
