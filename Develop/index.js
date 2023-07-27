// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
let input = "input";
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: input,
    message: "What is the title of your Project?",
    name: "title",
  },
  {
    type: input,
    message: "Please provide a description for your project.",
    name: "description",
  },
  {
    type: input,
    message: "What are the steps to install your project?",
    name: "install",
  },
  {
    type: input,
    message: "How do you use your project?",
    name: "usage",
  },
  {
    type: input,
    message: "Please provide any additional credit.",
    name: "credit",
  },
  {
    type: "list",
    message: "Please choose a license.",
    name: "license",
    choices: ["MIT", "Apache", "ISC", "BSD-3", "BSD-2", "Creative Commons"],
  },
  {
    type: input,
    message: "How do you test your app?",
    name: "test",
  },
  {
    type: input,
    message: "Please add any contribution steps.",
    name: "contributing",
  },
  {
    type: input,
    message: "Enter your GitHub username.",
    name: "github",
  },
  {
    type: input,
    message: "Please enter your email.",
    name: "email",
  },
  {
    type: "confirm",
    message: "Would you like to add a table of contents?",
    name: "contents",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const userInput = await inquirer.prompt(questions);
    const finalREADME = generateMarkdown(userInput);
    writeToFile("./output/README.md", finalREADME);
    console.log("Success!");
  } catch (err) {
    console.log("There was an error.");
  }
}

// Function call to initialize app
init();
