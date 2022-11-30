// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'

//requiring Employee Parent Class
const Employee = require("./Employee");

//New Intern class that inherits properties from the Employee class;
class Intern extends Employee{
    constructor(name, id, email, officeNumber) {
        //inherit from parent class
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    //function to return the office number if needed.
    getOfficeNo() {
        return this.officeNumber
    }
    //Recalling function from parent and overiding employee to return Manager.
    getRole() {
        return 'Manager'
    }
}

//Export
module.exports = Manager;
