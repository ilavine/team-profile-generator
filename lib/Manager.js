const fs = require("fs");
const inquirer = require("inquirer");

class Manager {
  constructor(name, employeeId, email, gitHub) {
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.gitHub = gitHub;
  }

  questionsManager() {
    this.initializeQuestions();
  }

  initializeQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is the manager's employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the manager's email address?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is the manager's GitHub account?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.employeeId,
          answers.email,
          answers.gitHub
        );

        fs.readFile("./lib/employees.json", "utf8", (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          
          let employees = [];
          if (data) {
            employees = JSON.parse(data);
          }

          employees.push({
            title: "Manager",
            name: manager.name,
            employeeId: manager.employeeId,
            email: manager.email,
            gitHub: manager.gitHub,
          });

          fs.writeFile(
            "./lib/employees.json",
            JSON.stringify(employees),
            (err) => {
              if (err) throw err;
              console.log("employees.json updated successfully.");
            }
          );
        });
      });
  }
}

module.exports = Manager;
