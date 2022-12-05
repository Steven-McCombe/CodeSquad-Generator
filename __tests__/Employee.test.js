//Requiring the employee file in the lib directory
const Employee = require('../lib/Employee');

// test('creates an employee object', () => {
//     const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
// });
describe("Employee", () => {
        it("should return an object containing a Name, Id and Email Address", () => {
            const employee = new Employee('Steven', 69, "smccombe93@gmail.com")
  
            expect(getName() in Employee).toEqual('Steven');
            expect(getID() in Employee).toEqual(69);
            expect(getEmail() in Employee).toEqual('smccombe93@gmail.com')
        });
    });