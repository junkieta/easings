import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';

export default [
    {
        input: './src/Lib.ts',

        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'esm' },
            { file: "./dist/easings.umd.js", format: 'umd', name: 'easings' },
        ],

        plugins: [
            terser({module:true}),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        module: "es2020",
                        target: "es2020",
                        declaration: true,
                        moduleResolution: "node"
                    }
                },
                useTsconfigDeclarationDir: true,
            })
        ]

    }
];
