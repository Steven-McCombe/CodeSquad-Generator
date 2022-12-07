
//new parent class to cover all employees
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //function to return the name of the employee
    getName() {
        return this.name;
    }
    //function to return the ID Number of the employee
    getId() {
       return this.id;
    }
    //function to return the email address of the employee
    getEmail() {
       return this.email;
    }
    //returns role as employee
    getRole() {
        return 'Employee'
    }
}


//Export
module.exports = Employee;