/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // siteMetadata: {
  //   description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  //   author: `@gatsbyjs`,
  // },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@helpers": "src/helpers",
          "@styles": "src/styles",
          "@assets": "src/assets",
          "@data": "src/data",
          "@router": "src/router",
          "@templates": "src/templates"
        },
        extensions: ["js"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `src/assets/fonts/`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/favicons`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicons/android-chrome-512x512.png` // This path is relative to the root of the site.
      }
    }
  ]
};
