import eslintConfigPrettier from 'eslint-config-prettier';

export const config = [
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Error prevention
      "no-undef": "error",
      "no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: false,
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
      "no-constant-binary-expression": "error",
      "no-unreachable-loop": "error",
      "no-promise-executor-return": "error",
      "no-template-curly-in-string": "error",
      
      // Code quality
      eqeqeq: "error",
      "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
      "array-callback-return": ["error", { allowImplicit: true }],
      "default-case-last": "error",
      "no-label-var": "error",
      
      // Best practices
      curly: ["warn", "multi-line"],
      yoda: "warn",
      "no-else-return": "warn",
      "no-console": "error",
      "no-useless-return": "warn",
      "no-duplicate-imports": "warn",
      "no-multiple-empty-lines": "warn",
      "no-undef-init": "warn",
    },
  },
  eslintConfigPrettier,
];

export default config;