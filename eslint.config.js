import antfu from "@antfu/eslint-config";

export default antfu({
  astro: true,
  rules: {
    "no-console": "off",
    "style/jsx-tag-spacing": "off",
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
