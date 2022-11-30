// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'

//requiring employee parent class
const Employee = require("./Employee");
//New engineer class that inherits properties from the Employee class;
class Engineer extends Employee {
    
    constructor(name, id, email, git) {
        //inherit from parent class
        super(name, id, email)
        this.git = git;
    }
    //Function to return github username
    getGithub() {
     return this.git;
    }
    //Recalling function from parent and overiding to return engineer.
    getRole() {
        return 'Engineer'
    }
}

//Export
module.exports = Engineer;