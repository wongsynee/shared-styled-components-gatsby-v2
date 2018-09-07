/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { transpileModule } = require(`typescript`)

const test = /\.tsx?$/
const compilerDefaults = {
  target: `esnext`,
  experimentalDecorators: true,
  jsx: `react`,
  module: `es6`,
}

exports.resolvableExtensions = () => {
  return [`.ts`, `.tsx`]
}

exports.onCreateWebpackConfig = (
  { actions, loaders },
  { compilerOptions, ...options }
) => {
  const typescriptOptions = {
    transpileOnly: false,
    compilerOptions: {
      ...compilerDefaults,
      ...compilerOptions,
    },
  }
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test,
          use: [
            loaders.js(),
            {
              loader: require.resolve(`ts-loader`),
              options: typescriptOptions,
            },
          ],
        },
      ],
    },
  })
}

exports.preprocessSource = ({ contents, filename }, { compilerOptions }) => {
  const copts = { ...compilerDefaults, ...compilerOptions }

  // return the transpiled source if it's TypeScript, otherwise null
  return test.test(filename)
    ? transpileModule(contents, { compilerOptions: copts }).outputText
    : null
}
