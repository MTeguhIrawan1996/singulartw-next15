/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-require-imports */
const generateService = require('./generate/service');
const generateComponent = require('./generate/component');
const { exec } = require('child_process');

module.exports = function (plop) {
  plop.setGenerator('component', generateComponent);
  plop.setGenerator('service', generateService);

  plop.setActionType('custom-lint', () => {
    return new Promise((resolve, reject) => {
      exec('npm run lint:fix', (error, stdout, stderr) => {
        if (error) {
          console.error(`Linting failed: ${stderr}`);
          reject(error);
        } else {
          console.log(`Linting successful:\n${stdout}`);
          resolve('Linting completed successfully.');
        }
      });
    });
  });
};
