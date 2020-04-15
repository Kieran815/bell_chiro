import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import ServiceCarousel from "../components/ServiceCarousel";
import ItemsCarousel from "../components/ItemsCarousel";
import withStyles from "@material-ui/styles/withStyles";
import bellBanner from "./images/bell_logo_dark_banner.jpg";

const styles = theme => ({
    root: {
      fontWeight: "bold"
    }
  }),
  Home = props => {
    return (
      <Page avatar={bellBanner}>
        <SEO title="Home">
          <meta
            name="description"
            content="Bell Chriopractic and Pain Management; Serving St. Louis since 1977; Florissant, Missouri; Telemedicine; Car Accidents; Medical Marijuana Certification; Medical Marijuana; Low Testosterone Therapy; Low T Therapy; Low-T Therapy; Decompression"
          />
        </SEO>
        <ServiceCarousel />
        <ItemsCarousel />
        <Card
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <h2>Come Visit Us</h2>
          <iframe
            title="Google_Map_Pin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.6657840999337!2d-90.33031178255611!3d38.794295500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df3747c061b7e3%3A0x84d05d5cb60a30ee!2sBell%20Chiropractic%20%26%20Pain%20Management!5e0!3m2!1sen!2sus!4v1586537886759!5m2!1sen!2sus"
            width="400"
            height="300"
            frameBorder="0"
            style={{
              border: "1px solid #0782c8"
            }}
            allowFullScreen=""
            aria-hidden="false"
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
      filter: { fileAbsolutePath: { regex: "/products/services/" } }
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
