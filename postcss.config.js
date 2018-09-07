module.exports = ({ file }) => {
  const isCss = file.extname === '.css'

  return {
    sourceMap: true,
    plugins: {
      'postcss-import': isCss ? {
        root: __dirname,
      } : false,
      'postcss-mixins': isCss,
      'postcss-cssnext': isCss,
      'postcss-preset-env': {},
    },
  }
}
