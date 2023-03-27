const Manager = require('../lib/Manager');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('Manager', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize a Manager with the correct inputs', async () => {
    const name = 'John Doe';
    const employeeId = '123';
    const email = 'johndoe@example.com';
    const gitHub = 'johndoe';

    inquirer.prompt.mockResolvedValueOnce({
      name,
      employeeId,
      email,
      gitHub,
    });

    const manager = new Manager();
    await manager.questionsManager();

    expect(Manager).toHaveBeenCalledWith(name, employeeId, email, gitHub);
  });
});
