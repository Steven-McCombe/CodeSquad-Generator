//Requiring the Engineer file in the lib directory
const Engineer = require('../lib/Engineer');
//Runs a test with 4 parameters if the data returns as a match the test will pass 
describe("Engineer", () => {
    it("should return an object containing a Name, Id and Email Address", () => {
        const engineer = new Engineer('Steven', 69, "smccombe93@gmail.com", "STEVEN-MCCOMBE")

        expect(engineer.getName()).toEqual('Steven');
        expect(engineer.getId()).toEqual(69);
        expect(engineer.getEmail()).toEqual('smccombe93@gmail.com')
        expect(engineer.getGithub()).toEqual('STEVEN-MCCOMBE')
        expect(engineer.getRole()).toEqual('Engineer')
        
    });
});