//requiring Employee Parent Class
const Employee = require("./Employee");

//New Intern class that inherits properties from the Employee class;
class Intern extends Employee{
    constructor(name, id, email, school) {
        //inherit from parent class
        super(name, id, email)
        this.school = school;
    }
    //Function to return school namne
    getSchool() {
     return this.school;
    }
    //Recalling function from parent and over riding to return Intern.
    getRole() {
        return 'Intern'
    }
}

//Export
module.exports = Intern;