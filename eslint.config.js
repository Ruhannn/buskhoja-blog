import antfu from "@antfu/eslint-config";

export default antfu({
  // nextjs
  // pnpm
  // react
  // type  lib or app
  // astro,
  astro: true,
  lessOpinionated: true,
  rules: {
    "no-console": ["warn"],
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "antfu/no-top-level-await": ["off"],
    "style/jsx-tag-spacing": "off",
    "react/no-array-index-key": "off",
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
  },
  ignores: [
    "public/",
  ],
  typescript: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  formatters: {
    css: "prettier",
    html: "prettier",
    prettierOptions: {
      semi: true,
      singleQuote: false,
    },
  },
  name: "hm",
  // plugins:{

  // }
});
