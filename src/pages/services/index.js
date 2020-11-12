import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";
import Card from "../../components/Card";

const Products = props => {
  const products = props.data.allMarkdownRemark.edges;
  return (
    <Page>
      <SEO title="Healthcare Services" />
      <Card title="Healthcare Services">
        <List items={products} />
      </Card>
    </Page>
  );
};

export const query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
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
