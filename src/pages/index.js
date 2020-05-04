import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Button from "@material-ui/core/Button";
import Card from "../components/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Page from "../components/Page";
import ServiceCarousel from "../components/ServiceCarousel";
import ItemsCarousel from "../components/ItemsCarousel";
import withStyles from "@material-ui/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
// logo banner
import bellLogo from "./images/bell_logo_dark.jpg";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";




const useStyles = makeStyles({
  media: {
    minWidth: "100%",
    minHeight: "50vh",
    marginBottom: "3em"
  }
});

const styles = theme => ({
    root: {
      fontWeight: "bold",
      backgroundColor: "#2b3940"
    }
  }),
  Home = props => {
    const classes = useStyles();
    return (
      <Page>
        <SEO title="Home">
          <meta
            name="description"
            content="Bell Chriopractic and Pain Management; Serving St. Louis since 1977; Florissant, Missouri; Telemedicine; Car Accidents; Medical Marijuana Certification; Medical Marijuana; Low Testosterone Therapy; Low T Therapy; Low-T Therapy; Decompression"
          />
        </SEO>
        <div id="site_intro" style={{ marginBottom: "2em" }}>
          <Card>
            <CardMedia
              className={classes.media}
              image={bellLogo}
              title="Bell Chiropractic & Pain Management"
            />
            <CardHeader
              title="Serving Florissant since 1977"
              style={{ textAlign: "center" }}
            />
            <CardContent>
              We are your first choice in healthcare. We are a medically
              integrated health clinic with chiropractors and medical doctors
              working together to improve patient outcomes. ​Whether you need a
              trigger point injection, weight loss medication, an adjustment,
              laser therapy or even a medical certification, we are here for
              you!​{" "}
              <strong>
                Be your best possible you with Bell Chiropractic & Pain
                Management.
              </strong>
            </CardContent>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Paper>
                  <CardContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <LocalHospitalOutlinedIcon fontSize="large" />
                      <h3>Address:</h3>
                    </div>
                    <a
                      href="https://www.google.com/maps/place/493+Rue+St+Francois+%231A,+Florissant,+MO+63031/@38.7942955,-90.3303118,17z/data=!3m1!4b1!4m5!3m4!1s0x87df37a351551005:0xa01648a699f5ed62!8m2!3d38.7942955!4d-90.3281231"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      493 Rue St Francois #1A
                      <br /> Florissant, MO 63031
                    </a>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <PhoneAndroidIcon />
                      <h3>Phone:</h3>
                    </div>
                    <a href="tel:314-838-1983">(314) 838-1983</a>
                  </CardContent>
                </Paper>
                <Paper>
                  <CardContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <DirectionsCarIcon />
                      <CardHeader title="Come Visit Us!" />
                    </div>
                    <iframe
                      title="Google_Map_Pin"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.6657840999337!2d-90.33031178255611!3d38.794295500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df3747c061b7e3%3A0x84d05d5cb60a30ee!2sBell%20Chiropractic%20%26%20Pain%20Management!5e0!3m2!1sen!2sus!4v1586537886759!5m2!1sen!2sus"
                      width="auto"
                      height="auto"
                      frameBorder="0"
                      style={{
                        border: "1px solid #0782c8"
                      }}
                      allowFullScreen=""
                      aria-hidden="false"
                    ></iframe>
                  </CardContent>
                </Paper>
                <Paper>
                  <CardContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <QueryBuilderIcon />
                      <h3>Hours:</h3>
                    </div>
                    <strong>Monday - Wednesday - Friday:</strong>
                    <br /> 9a-12p & 3p-6p
                    <br />
                    <br />
                    <strong>Tuesday - Thursday:</strong>
                    <br /> 3p-6p
                  </CardContent>
                </Paper>
              </div>
            </CardContent>
            <Button
              variant="contained"
              component={Link}
              color="primary"
              href="/Patient_Form"
              style={{ width: "100%", marginRight: "auto", marginLeft: "auto" }}
            >
              Schedule an Appointment
            </Button>
          </Card>
        </div>
        <div className="ProductCarousels">
          <ServiceCarousel />
          <ItemsCarousel />
        </div>
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
