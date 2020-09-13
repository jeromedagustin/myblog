module.exports = {
  siteMetadata: {
    title: `Jay Loves Patterns`,
    description: `This is for getting thoughts into a single place.`,
    // image: `/default-site-image.jpg`,
    siteUrl: `https://www.jeromeagustin.com/blog`,
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
    twitterUsername: `@jeromedagustin`,
    authorName: `Jerome Agustin`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/content/posts`, name: `posts` },
    },
  ],
};
