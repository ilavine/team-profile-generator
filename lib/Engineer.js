const fs = require("fs");
const inquirer = require("inquirer");

class Engineer {
  constructor(name, employeeId, email, gitHub) {
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.gitHub = gitHub;
  }

  questionsEngineer() {
    this.initializeQuestions();
  }

  initializeQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Engineer's name?",
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is the Engineer's employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the Engineer's email address?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is the Engineer's GitHub account?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.employeeId,
          answers.email,
          answers.gitHub
        );

        fs.readFile("./lib/employees.json", "utf8", (err, data) => {
          let employees = [];
          if (!err && data) {
            employees = JSON.parse(data);
          }

          employees.push({
            title: "Engineer",
            name: engineer.name,
            employeeId: engineer.employeeId,
            email: engineer.email,
            gitHub: engineer.gitHub,
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

module.exports = Engineer;
