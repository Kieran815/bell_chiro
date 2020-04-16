import withRoot from "../utils/withRoot";
import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Card from "../components/Card";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
    root: {
      fontWeight: "bold"
    }
  }),
  ItemsCarousel = props => (
    <StaticQuery
      query={graphql`
        query itemsQuery {
          allFile(filter: { extension: { eq: "jpg" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/products/items/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  image {
                    publicURL
                  }
                  path
                  title
                  date(formatString: "DD MMMM YYYY")
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <div style={{ marginBottom: "2em" }}>
          <Card
            title="Health & Wellness Products"
            avatar={
              <Avatar>
                <Gift />
              </Avatar>
            }
            action={
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to="/products/items/"
              >
                View All Items
              </Button>
            }
            style={{ minHeight: 523 }}
          >
            <Carousel items={data.allMarkdownRemark.edges} />
          </Card>
        </div>
      )}
    />
  );

ItemsCarousel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(ItemsCarousel));
