// import node
const fs = require('fs');
const inquirer = require('inquirer')
//Require html template page
const {cardTemplate, writeHTML} = require('./src/HTMLtemplate');

// import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

let teamMembers = []
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const addMember = () => {
    console.log(`----------------
Add a Team member
----------------`)
    inquirer.prompt([{
        type: "list",
        message: "Choose team members role:",
        name: "teamRole",
        choices: ["Manager", "Intern", "Engineer"],
        
    },
    {
        type: "input",
        message: "Enter the team members name:",
        name: "teamName",
        default: "Joe Blogs",
    },
    {
        type: "input",
        message: "Enter the team members ID number:",
        name: "teamId",
        default: 5,
    },
    {
        type: "input",
        message: "Enter the team members email address:",
        name: "teamEmail",
        default: "joeblogs2022@gmail.com"
    },
    {
        type: "input",
        message: "Enter the Managers office number: ",
        name: "teamOfficeNo",
        default: 502,
        when: (input) => input.teamRole === "Manager",
    },
    {
        type: "input",
        message: "Enter the Engineers Github username: ",
        name: "teamGithub",
        default: "JOEBLOGS",
        when: (input) => input.teamRole === "Engineer",
    },
    {
        type: "input",
        message: "Enter the Interns school name: ",
        name: "teamSchool",
        default: "ST Joe Blogs HighSchool",
        when: (input) => input.teamRole === "Intern",
    },
    {
        type: 'list',
        name: 'teamAdd',
        message: 'Would you like to add another team member?',
        choices: ["Yes","No - Im finished building my team"],
    }
    
    ])
        .then(data => {
            //deconstructing the data
            let { teamRole, teamName, teamId, teamEmail, teamOfficeNo, teamGithub, teamSchool, teamAdd } = data;
            //declaring employee variable
            let employee;
            //switch statement based on prompt input. if manager creates a new manager and pushes it to the team array etc.
            switch (teamRole) {
                case "Manager": {
                    employee = new Manager(teamName, teamId, teamEmail, teamOfficeNo, teamRole);
                    teamMembers.push(employee);
                    console.log(teamMembers);
                    break
                }
                case "Engineer": {
                    employee = new Engineer(teamName, teamId, teamEmail, teamGithub, teamRole) ;
                    teamMembers.push(employee);
                    console.log(teamMembers);
                    break
                }
                case "Intern": {
                    employee = new Intern(teamName, teamId, teamEmail, teamSchool, teamRole);
                    teamMembers.push(employee);
                    console.log(teamMembers);
                    break
                }
                default: {
                    console.error("Something Went Wrong.")
                }
            }
            // if the user selects yes then they will return to the prompts
            if (teamAdd === "Yes") {
                addMember()
                //otherwise write the file.
            } else {
                 writeFile(cardTemplate(teamMembers))
                
            }
        }    
        )
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // Error Handling
        if (err) {
            console.log(err);
            return;
        // Team created and Index.html
        } else {
            console.log("Your team has been created!")
        }
    })
};

addMember()
