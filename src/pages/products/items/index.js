import withRoot from "../../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../../components/SEO";
import Page from "../../../components/Page";
import List from "../../../components/List";

const Products = props => {
  const items = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Health & Wellness Products">
      <SEO title="Health & Wellness Products" />
      <List items={items} />
    </Page>
  );
};

export const query = graphql`
  query ItemsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/items/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            image {
              publicURL
            }
            title
            path
          }
        }
      }
    }
  }
`;

export default withRoot(Products);
