// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
      this.officeNumber = officeNumber;
  }

  getRole() {}
}
  
  module.exports = Manager;

  //* officeNumber

  //* getRole() // Overridden to return 'Manager'

