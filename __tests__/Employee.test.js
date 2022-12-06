//Requiring the employee file in the lib directory
const Employee = require('../lib/Employee');

describe("Employee", () => {
        it("should return an object containing a Name, Id and Email Address", () => {
            const employee = new Employee('Steven', 69, "smccombe93@gmail.com")
  
            expect(employee.getName()).toEqual('Steven');
            expect(employee.getId()).toEqual(69);
            expect(employee.getEmail()).toEqual('smccombe93@gmail.com')
        });
    });