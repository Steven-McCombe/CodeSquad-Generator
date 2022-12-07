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
// declaring team members as an empty array
let teamMembers = []
//function to prompt user for team member data. 
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
        //returns data from user input 
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
                    break
                }
                case "Engineer": {
                    employee = new Engineer(teamName, teamId, teamEmail, teamGithub, teamRole) ;
                    teamMembers.push(employee);
                    break
                }
                case "Intern": {
                    employee = new Intern(teamName, teamId, teamEmail, teamSchool, teamRole);
                    teamMembers.push(employee);
                    break
                }
                default: {
                    //error handling
                    console.error("Something Went Wrong.")
                }
            }
            // if the user selects yes then they will return to the prompts
            if (teamAdd === "Yes") {
                addMember()
                //otherwise write the file.
            } else {
                //pass through the htmlcards with employee data into to the write file
                 writeFile(cardTemplate(teamMembers))
                
            }
        }    
        )
}
//function to write data to a html file and stor it in './dist/index.html'
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
