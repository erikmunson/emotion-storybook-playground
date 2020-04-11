import { existsSync } from 'fs';

import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

import jsx from 'acorn-jsx';
import babel from 'rollup-plugin-babel';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/main.ts',
    external: (id) => existsSync(`./node_modules/${id}`),
    acornInjectPlugins: [jsx()],
    plugins: [
      commonjs(),
      babel({
        extensions: ['.ts', '.tsx'],
      }),
      typescript(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
    ],
    output: [{ dir: 'dist', format: 'es', sourcemap: true }],
  },
];
