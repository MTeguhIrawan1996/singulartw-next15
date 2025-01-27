/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message:
        'What type of component do you want to create (elements | icons | layouts | shared)?',
      choices: ['elements', 'icons', 'layouts', 'shared'],
    },
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the component?",
      validate: function (value) {
        if (!/.+/.test(value)) {
          return console.error('Missing', 'you must define a component name');
        }

        if (value.length < 3) {
          message = console.error(
            'Too Short',
            `"${value}" is not descriptive enough`,
          );
        }

        return true;
      },
    },
    {
      type: 'confirm',
      name: 'isGeneric',
      message: 'Will this component use TypeScript generics?',
      default: false,
    },
  ],
  actions: function (data) {
    const baseDir = path.join('src', 'components', data.type);
    const indexFilePath = path.join(baseDir, 'index.ts');

    const componentType = data.isGeneric ? 'generic-component' : 'component';

    const actions = [];

    if (data.type !== 'icons') {
      actions.push(
        {
          type: 'add',
          path: `${baseDir}/{{kebabCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `./generate/component/templates/${componentType}.hbs`,
        },
        {
          type: 'add',
          path: `${baseDir}/{{kebabCase name}}/index.ts`,
          template: `export * from './{{pascalCase name}}';`,
        },
      )

      if (fs.existsSync(indexFilePath)) {
        actions.push({
          type: 'append',
          path: `${baseDir}/index.ts`,
          template: `export * from './{{kebabCase name}}';\n`,
        });
      } else {
        actions.push({
          type: 'add',
          path: `${baseDir}/index.ts`,
          template: `export * from './{{kebabCase name}}';`,
        });
      }
    } else {
      actions.push(
        {
          type: 'add',
          path: `${baseDir}/{{pascalCase name}}.tsx`,
          templateFile: './generate/component/templates/icon.hbs',
        }
      )

      const iconsFolder = path.resolve(baseDir);
      const files = fs.existsSync(iconsFolder) ? fs.readdirSync(iconsFolder) : [];
      const iconNames = files
        .filter((file) => file.endsWith('.tsx'))
        .filter((file) => file !== 'index.tsx' && file !== 'Icons.tsx')
        .map((file) => file.replace('.tsx', ''));

      iconNames.push(data.name);

      const iconBaseNames = iconNames.map((name) =>
        name.replace(/Icon$/, '').toLowerCase()
      );

      const iconsFilePath = path.join(baseDir, 'Icons.tsx');
      actions.push({
        type: 'add',
        path: iconsFilePath,
        templateFile: './generate/component/templates/icon-base.hbs',
        force: true,
        data: { icons: iconNames, baseNames: iconBaseNames },
      });

      if (!fs.existsSync(indexFilePath)) {
        actions.push({
          type: 'add',
          path: `${baseDir}/index.ts`,
          template: `export { default } from './Icons';`,
        });
      }
    }


    actions.push({ type: 'custom-lint' });

    return actions;
  },
};
