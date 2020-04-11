import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
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
  Home = props => {
    const products = props.data.allMarkdownRemark.edges;
    return (
      <Page title="BELL CHIROPRACTIC & PAIN MANAGEMENT">
        <SEO title="Home">
          <meta
            name="description"
            content="Bell Chriopractic and Pain Management; Serving St. Louis since 1977; Florissant, Missouri; Telemedicine; Car Accidents; Medical Marijuana Certification; Medical Marijuana; Low Testosterone Therapy; Low T Therapy; Low-T Therapy; Decompression"
          />
        </SEO>
        <Card
          title="Our Services"
          avatar={
            <Avatar>
              <Gift />
            </Avatar>
          }
          action={
            <Button
              variant="contained"
              className={props.classes.root}
              component={Link}
              to="/products"
            >
              View All Services
            </Button>
          }
          style={{ minHeight: 523 }}
        >
          <Carousel items={products} />
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em"
          }}
        >
          <h2>Come Visit Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.6657840999337!2d-90.33031178255611!3d38.794295500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df3747c061b7e3%3A0x84d05d5cb60a30ee!2sBell%20Chiropractic%20%26%20Pain%20Management!5e0!3m2!1sen!2sus!4v1586537886759!5m2!1sen!2sus"
            width="400"
            height="300"
            frameborder="0"
            style={{
              border: "1px solid #0782c8"
            }}
            allowFullScreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Card>
      </Page>
    );
  };

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
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
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Home));
