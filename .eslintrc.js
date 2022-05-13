module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 2017
  },
  env: {
    "es6": true
  },
  extends: [
    "prettier"
  ],
  rules: {
    camelcase: "off",
    quote: "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
  },
  overrides: [
    {
      files: "./**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "next",
        "next/core-web-vitals",
        "prettier"
      ],
      rules: {
        "prettier/prettier": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/no-unresolved": "off",
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-no-target-blank": "error",
        "react-hooks/exhaustive-deps": "off",
        "react/di": "off",
        "react/display-name": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-unused-prop-types": "off",
        "react/require-default-props": "off",
        "jsx-a11y/anchor-is-valid": [
          "error",
          {
            components: ["Link"],
            specialLink: ["hrefLeft", "hrefRight"],
            aspects: ["invalidHref", "preferButton"],
          },
        ]
        ,
        "@next/next/no-html-link-for-pages": ["error", "./src/pages"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-unnecessary-type-constraint": "off",
        "@typescript-eslint/no-non-null-assertion": "off"
      },
    },
  ]
}
