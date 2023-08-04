module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/order': [
      'error',
      {
        groups: [
          'type', //모듈의 타입별 (파일의 확장자)
          'builtin', //내장 모듈 (node.js)
          'external', //외부 라이브러리
          'internal', // 내부 프로젝트 모듈 (훅, 페이지, 컴포넌트 등)
          'parent', //현재 모듈 상위 디렉토리에 있는 모듈
          'sibling', // 현재 모듈과 같은 디렉토리에 있는 모듈
          'index', // 인덱스 파일
          'unknown', // 위 그룹에 속하지 않는 그룹
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@hooks/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@components/*',
            group: 'internal',
            position: 'after',
          },
        ],

        pathGroupsExcludedImportTypes: ['@tanstack*'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
