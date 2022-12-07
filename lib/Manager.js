
//requiring Employee Parent Class
const Employee = require("./Employee");

//New Manager class that inherits properties from the Employee class;
class Manager extends Employee{
    constructor(name, id, email, officeNo) {
        //inherit from parent class
        super(name, id, email)
        this.officeNo = officeNo;
    }
    //function to return the office number if needed.
    getOfficeNo() {
        return this.officeNo
    }
    //Recalling function from parent and overiding employee to return Manager.
    getRole() {
        return 'Manager'
    }
}

//Export
module.exports = Manager;
