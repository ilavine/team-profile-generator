class HTMLTemplate {
  constructor(data) {
    this.data = data;
  }

  generateHTML() {
    let managerHTML = "";
    let engineerHTML = "";
    let internHTML = "";

    for (let i = 0; i < this.data.length; i++) {
      const employee = this.data[i];
      if (employee.title === "Manager") {
        managerHTML += `
                <div class="card col-12 col-md-6 col-lg-4 mb-3">
                    <h2>Manager</h2>
                    <p>Name: ${employee.name}</p>
                    <p>Employee ID: ${employee.employeeId}</p>
                    <a href="mailto:${employee.email}">Email: ${employee.email}</a>
                    <a href="https://github.com/${employee.gitHub}">GitHub: ${employee.gitHub}</a>
                </div>
            `;
      } else if (employee.title === "Engineer") {
        engineerHTML += `
                <div class="card col-12 col-md-6 col-lg-4 mb-3">
                    <h2>Engineer</h2>
                    <p>Name: ${employee.name}</p>
                    <p>Employee ID: ${employee.employeeId}</p>
                    <a href="mailto:${employee.email}">Email: ${employee.email}</a>
                    <a href="https://github.com/${employee.gitHub}">GitHub: ${employee.gitHub}</a>
                </div>
            `;
      } else if (employee.title === "Intern") {
        internHTML += `
                <div class="card col-12 col-md-6 col-lg-4 mb-3">
                    <h2>Intern</h2>
                    <p>Name: ${employee.name}</p>
                    <p>Employee ID: ${employee.employeeId}</p>
                    <a href="mailto:${employee.email}">Email: ${employee.email}</a>
                    <a href="https://github.com/${employee.gitHub}">GitHub: ${employee.gitHub}</a>
                </div>
            `;
      }
    }

    return `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Team Members</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
              <link rel="stylesheet" href="../src/style.css">  
            </head>
            <body>
            <nav class="navbar justify-content-center">
                    <h1>Team Members</h1>
             
            </nav>
              
    
              <div class="container">
                <div class="row">
                    ${managerHTML}
                    ${engineerHTML}
                    ${internHTML}
                </div>
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
            </body>
          </html>
        `;
  }
}

module.exports = HTMLTemplate;
