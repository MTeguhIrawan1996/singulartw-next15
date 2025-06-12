import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'footer-leading-blank': [0],
    'header-max-length': [0],
    'subject-case': [0],
    'subject-empty': [0],
    'type-empty': [0, 'never'],
  },
};

export default Configuration;
