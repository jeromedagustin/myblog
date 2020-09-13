import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import SEO from "react-seo-component";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default ({ data }) => {
  const {
    description,
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <Layout>
      <IndexWrapper>
        <SEO
          data={data}
          title={title}
          description={description}
          pathname={siteUrl}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}
        />
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};

export const data = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;
