// import { graphql } from 'gatsby';

// export const posts = graphql`
//   query SITE_INDEX_QUERY {
//     allMdx(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { published: { eq: true } } }
//     ) {
//       nodes {
//         id
//         excerpt(pruneLength: 250)
//         frontmatter {
//           title
//           date
//         }
//       }
//     }
//   }
// `;