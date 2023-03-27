const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const HTMLTemplate = require("../src/index");
const data = require("./employees.json");


class Main {
  start() {
    this.initialize();
  }

  initialize() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamMember",
          message:
            "Select a team member would you like to enter information for.",
          choices: ["Manager", "Engineer", "Intern"],
        },
      ])
      .then((answer) => {
        switch (answer.teamMember) {
          case "Manager":
            return this.enterManagerInformation();
          case "Engineer":
            return this.enterEngineerInformation();
          case "Intern":
            return this.enterInternInformation();
        }
      })
      .then(() => {
        const template = new HTMLTemplate(data);
        const html = template.generateHTML();
        fs.writeFile("./dist/employees.html", html, (err) => {
          if (err) throw err;
          console.log("employees.html file created successfully.");
        });
      })
      .catch((err) => console.error(err));
  }

  enterManagerInformation() {
    const manager = new Manager();
    return manager.questionsManager();
  }

  enterEngineerInformation() {
    const engineer = new Engineer();
    return engineer.questionsEngineer();
  }

  enterInternInformation() {
    const intern = new Intern();
    return intern.questionsIntern();
  }
}

module.exports = Main;
