// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
let input = "input";
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your Project?",
  "Please provide a description for your project.",
  "What are the steps to install your project?",
  "How do you use your project?",
  "Please provide any additional credit.",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer
    .prompt([
      {
        type: input,
        message: questions[0],
        name: "title",
      },
      {
        type: input,
        message: questions[1],
        name: "description",
      },
      {
        type: input,
        message: questions[2],
        name: "install",
      },
      {
        type: input,
        message: questions[3],
        name: "usage",
      },
      {
        type: input,
        message: questions[4],
        name: "credit",
      },
    ])
    .then((response) => fs.appendFile("README.md"));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
