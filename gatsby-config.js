module.exports = {
  siteMetadata: {
    author: `@Ivan`,
    description: `My personal website with a little bit about me, my contact info, my blog, and my projects.`,
    siteUrl: "https://www.ivanortiz.me",
    title: "Ivan Ortiz | My portfolio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "static",
      },
      __key: "images",
    },
  ],
};
