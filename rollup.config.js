import path from 'path';

import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

function resolvePath(p) {
  return path.resolve(__dirname, p);
}

export default [
  {
    input: resolvePath(pkg.entry),
    output: {
      file: resolvePath('dist/index.js'),
      format: 'cjs',
      name: 'vue-router-next-history',
    },
    plugins: [
      // ts support
      typescript(),
    ],
    external: ['@hippy/vue-next', 'vue-router'],
  },
];
