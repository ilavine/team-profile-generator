const fs = require("fs");
const inquirer = require("inquirer");

class Intern {
  constructor(name, employeeId, email, gitHub) {
    this.name = name;
    this.employeeId = employeeId;
    this.email = email;
    this.gitHub = gitHub;
  }

  questionsIntern() {
    this.initializeQuestions();
  }

  initializeQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Intern's name?",
        },
        {
          type: "input",
          name: "employeeId",
          message: "What is the Intern's employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the Intern's email address?",
        },
        {
          type: "input",
          name: "gitHub",
          message: "What is the Intern's GitHub account?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
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
            title: "Intern",
            name: intern.name,
            employeeId: intern.employeeId,
            email: intern.email,
            gitHub: intern.gitHub,
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

module.exports = Intern;
