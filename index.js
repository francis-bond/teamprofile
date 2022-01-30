const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Entern = require('./lib/Intern');
const Manager = require('./lib/Manager')
const render = require('./src/page-template')
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
    {
        type: 'list',
        message: "Add engineer/inter or finish building team",
        name: 'nextstep',
        choices: ["Intern", "Engineer", "Im done building my team"]
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