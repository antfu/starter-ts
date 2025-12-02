// @ts-check
import eslint from '@eslint/js'
import pluginPnpm from 'eslint-plugin-pnpm'
import { defineConfig, globalIgnores } from 'eslint/config'
import * as jsoncParser from 'jsonc-eslint-parser'
import * as yamlParser from 'yaml-eslint-parser'

export default defineConfig(
  globalIgnores([
    '**/dist',
    '**/node_modules',
    '**/.github/workflows',
  ]),
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
    extends: [eslint.configs.recommended],
  },
  {
    files: ['package.json', '**/package.json'],
    languageOptions: {
      parser: jsoncParser,
    },
    extends: pluginPnpm.configs.json,
  },
  {
    files: ['pnpm-workspace.yaml'],
    languageOptions: {
      parser: yamlParser,
    },
    extends: pluginPnpm.configs.yaml,
  },
)
