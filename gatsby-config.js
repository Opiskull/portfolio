module.exports = {
  siteMetadata: {
    title: "Christian Onuk Portfolio",
    titleTemplate: "%s",
    description: "A portfolio page of Christian Onuk",
    url: "https://onuk.dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/images/gatsby-icon.png",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "noopener",
            },
          },
        ],
      },
    },
  ],
};
