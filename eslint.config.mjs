import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import frontendAxiom from "eslint-plugin-frontend-axiom";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-config-next already registers the jsx-a11y plugin with a subset
  // of rules — merge in the rest of the recommended set without
  // re-declaring the plugin (ESLint flat config rejects redefining it).
  { rules: jsxA11y.flatConfigs.recommended.rules },
  frontendAxiom.configs.recommended,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored third-party plugin — not our code to lint.
    "vendor/**",
  ]),
]);

export default eslintConfig;
