// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import { uglify } from 'rollup-plugin-uglify'

const external = [
]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
    ],
    plugins: [
      typescript(),
      json(),
      uglify(),
    ],
    external,
  },
  {
    input: './typings/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  },
]
