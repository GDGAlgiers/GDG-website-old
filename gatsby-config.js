module.exports = {
  siteMetadata: {
    title: `GDG Algiers`,
    description: `The official website for the GDG Algiers community`,
    author: `@GDG_ALGIERS`,
    favicon :'./src/images/favicon.png'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gdg algiers 2020`,
        short_name: `gdg20`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fafafa`,
        display: `standalone`,
        icon: './src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
  ],
}
