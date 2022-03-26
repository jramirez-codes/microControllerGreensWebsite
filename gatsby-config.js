module.exports = {
  siteMetadata: {
    title: `MicroController Greens`,
    description: `Website for MCG`,
    author: `Jordan Ramirez`,
    siteUrl: `https://microcontrollergreens.live/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `react-chartjs-2`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        javascriptEnabled: true,
      },
    },
    // {
    //   resolve: 'gatsby-source-mysql',
    //   options: {
    //     connectionDetails: {
    //       host: 'localhost',
    //       user: 'jordanra_admin',
    //       password: 'microGreens123',
    //       database: 'jordanra_microControllerGreens'
    //     },
    //     queries: [
    //       {
    //         statement: 'SELECT * FROM ESPdata ORDER BY readingTime DESC LIMIT 0,1',
    //         idFieldName: 'status_id',
    //         name: 'status'
    //       },
    //       {
    //         statement: 'SELECT * FROM ESPdata',
    //         idFieldName: 'status_id',
    //         name: 'status'
    //       },
    //     ]
    //   }
    // },
  ],
}
