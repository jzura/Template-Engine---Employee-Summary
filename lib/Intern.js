// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
onst Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }

    getSchool() {}
    getRole() {}
    
  }
  
  module.exports = Intern;

  //* school 

  //* getSchool()

  //* getRole() // Overridden to return 'Intern'