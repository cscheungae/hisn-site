module.exports = {
  siteMetadata: {
    title: `聽障青年支援網絡| Hearing Impaired Support Network`,
    description: `凝聚來自不同主流學校的聽障青年，互相認識，交流自身的經驗及心得，並從中建立深厚的友誼，在助人自助的生命中成長，貫徹「眼在看、心在聽﹔聽障事、齊分享」的宗旨`,
    author: `@gatsbyjs`,
  },
  plugins: [
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `refer to contentful docs`,
        accessToken: `refer to contentful docs`,
        // Downloads and caches Contentful Assets to the local filesystem
        // Useful for reduced data usage in development
        // downloadLocal: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
