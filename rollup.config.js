export default {
  input: 'src/ProjectedMaterial.js',
  external: ['three'],
  output: [
    {
      format: 'umd',
      globals: {
        three: 'THREE',
      },
      name: 'projectedMaterial',
      exports: 'named',
      file: 'build/ProjectedMaterial.js',
    },
    {
      format: 'esm',
      file: 'build/ProjectedMaterial.module.js',
    },
  ],
}
