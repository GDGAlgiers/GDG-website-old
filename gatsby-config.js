module.exports = {
  siteMetadata: {
    title: `GDG Algiers`,
    description: `The official website for the GDG Algiers community`,
    author: `@GDG_ALGIERS`,
    url:"https://www.gdgalgiers.com",
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gdg algiers 2020`,
        short_name: `gdg-algiers20`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fafafa`,
        display: `minimal-ui`,
        icon: `src/images/icons/phonelogo.png`, // This path is relative to the root of the site.
      },
    },
    
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`,"/404"],
      },
    },
  ],
}
