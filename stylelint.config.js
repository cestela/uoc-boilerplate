module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    "selector-nested-pattern": "^&",
    "indentation": 2,
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": "lower",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use",
          "return",
          "function",
          "mixin",
          "include",
          "extend"
        ],
      },
    ],
  },
};
