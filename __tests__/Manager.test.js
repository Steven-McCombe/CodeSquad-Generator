//Requiring the Manager file in the lib directory
const Manager = require('../lib/Manager');
//Runs a test with 4 parameters if the data returns as a match the test will pass 
describe("Manager", () => {
    it("should return an object containing a Name, Id and Email Address", () => {
        const manager = new Manager ('Steven', 69, "smccombe93@gmail.com", "602")

        expect(manager.getName()).toEqual('Steven');
        expect(manager.getId()).toEqual(69);
        expect(manager.getEmail()).toEqual('smccombe93@gmail.com')
        expect(manager.getOfficeNo()).toEqual('602')
        expect(manager.getRole()).toEqual('Manager')
        
    });
});