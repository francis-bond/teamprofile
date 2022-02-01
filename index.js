const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Entern = require('./lib/Intern');
const Manager = require('./lib/Manager')
const render = require('./src/page-template');
const generatePage = require('./src/page-template');
const teamMembers = [];
const idArray = [];

const managerQuestions = [
    {
        type: 'input',
        message: "Enter managers name",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter managers ID",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter managers email address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter office number",
        name: 'officeNumber'
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: "Enter engineers name",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter engineers ID",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter engineers email address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter github username",
        name: 'name'
    },
    {
        type: 'list',
        message: "Add engineer/inter or finish building team",
        name: 'nextstep',
        choices: ["Intern", "Engineer", "Im done building my team"]
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "Enter interns name",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter interns ID",
        name: 'id'
    },
    {
        type: 'input',
        message: "Enter interns email address",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter school",
        name: 'school'
    },
    {
        type: 'list',
        message: "Add engineer/inter or finish building team",
        name: 'nextstep',
        choices: ["Intern", "Engineer", "Im done building my team"]
    },
]

function start() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            
        })
}

function start() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            // function that makes new class from
            if (response.nextstep === "Intern"){
                makeIntern();
            } else if(response.nextstep === "Engineer"){
                makeEngineer();
            } else{

            }
        })
}

start();

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generatePage(data)), (err) =>
        err ? console.log(err) : console.log('team.html created')
}

// Use inquirer to get inputs from user
// Push data for each team member into and array to be iterated through
// filter by employee type and send arrays to class constructors to add classes
// us the page-template.js to add cards to get html page script with the cards created for each employee
// create a team.html file and write to to it the info we get from page template
// create tests to test the function in the class constructors