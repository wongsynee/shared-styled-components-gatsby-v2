module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/static-app/pages`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
  ],
}
