//Requiring the Intern file in the lib directory
const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("should return an object containing a Name, Id and Email Address", () => {
        const intern = new Intern ('Steven', 69, "smccombe93@gmail.com", "St-Patricks")

        expect(intern.getName()).toEqual('Steven');
        expect(intern.getId()).toEqual(69);
        expect(intern.getEmail()).toEqual('smccombe93@gmail.com')
        expect(intern.getSchool()).toEqual('St-Patricks')
        expect(intern.getRole()).toEqual('Intern')
        
    });
});