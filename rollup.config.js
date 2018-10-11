import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default [
	{
		input: 'src/main.js',
		experimentalCodeSplitting: true,
		experimentalPreserveModules: true,
		output: {
			dir: 'dist',
			format: 'es'
		},
		plugins: [
			babel({
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
        ],
      }),
      commonjs(), // so Rollup can convert `ms` to an ES module
			resolve(), // so Rollup can find `ms`
		]
	},
];
