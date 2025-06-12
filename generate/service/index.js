/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

module.exports = {
  description: 'Generates services',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Enter the folder name to use (use kebab-case), e.g., customer-orders: ',
      validate: function (value) {
        if (!/.+/.test(value)) {
          return console.error('Missing', 'you must define a service folder name');
        }
        if (value.length < 3) {
          return console.error('Too Short', `"${value}" is not descriptive enough`);
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'type',
      message: 'What type of service do you want to create (queries | mutations)?: ',
      choices: ['queries', 'mutations'],
    },
    {
      type: 'input',
      name: 'fileName',
      message:
        'What is the name of the query or muatation file (use camel-case), e.g., getOrders/createOrder?: ',
      when: (answers) => !!answers.type,
      validate: function (value) {
        if (!/.+/.test(value)) {
          return 'You must provide a name for the query or mutation file.';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'mutationType',
      when: (answers) => answers.type === 'mutations',
      message: 'What type of mutation do you want to create (post | put | delete)?',
      choices: ['post', 'put', 'delete'],
    },
  ],
  actions: function (data) {
    const kebabCaseName = data.name
      .trim()
      .toLowerCase()
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    const baseDir = path.join('src', 'services', `${kebabCaseName}`);
    const indexTypeFilePath = path.join(baseDir, data.type, 'index.ts');
    const indexFilePath = path.join(baseDir, 'index.ts');

    const mutationObj = {
      post: {
        type: 'add',
        path: `${baseDir}/{{type}}/{{camelCase fileName}}.ts`,
        templateFile: `./generate/service/templates/{{mutationType}}.hbs`,
      },
      put: {
        type: 'add',
        path: `${baseDir}/{{type}}/{{camelCase fileName}}.ts`,
        templateFile: `./generate/service/templates/{{mutationType}}.hbs`,
      },
      delete: {
        type: 'add',
        path: `${baseDir}/{{type}}/{{camelCase fileName}}.ts`,
        templateFile: `./generate/service/templates/{{mutationType}}.hbs`,
      },
      queries: {
        type: 'add',
        path: `${baseDir}/{{type}}/{{camelCase fileName}}.ts`,
        templateFile: `./generate/service/templates/{{type}}.hbs`,
      },
    };

    const actions = [];

    if (!fs.existsSync(baseDir)) {
      actions.push({
        type: 'add',
        path: `${baseDir}/keys.ts`,
        templateFile: `./generate/service/templates/keys.hbs`,
      });
      actions.push({
        type: 'add',
        path: `${baseDir}/instances.ts`,
        templateFile: `./generate/service/templates/instances.hbs`,
      });
    } else {
      console.error(`Folder "${data.name}" already exists. Adding files to it.`);
    }

    if (!!data.fileName) {
      actions.push(mutationObj[data.mutationType || data.type]);
      if (!fs.existsSync(indexTypeFilePath)) {
        actions.push({
          type: 'add',
          path: `${baseDir}/{{type}}/index.ts`,
          template: `export * from './{{camelCase fileName}}';`,
        });
      } else {
        actions.push({
          type: 'append',
          path: `${baseDir}/{{type}}/index.ts`,
          template: `export * from './{{camelCase fileName}}';`,
        });
      }
    }

    if (!fs.existsSync(indexFilePath)) {
      actions.push({
        type: 'add',
        path: `${baseDir}/index.ts`,
        template: `export * from './{{type}}';`,
      });
    } else if (!fs.existsSync(indexTypeFilePath)) {
      actions.push({
        type: 'append',
        path: `${baseDir}/index.ts`,
        template: `export * from './{{type}}';`,
      });
    }

    actions.push({ type: 'custom-lint' });

    return actions;
  },
};
