import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3)
  },
  footer: {
    color: "#eee",
    marginBottom: theme.spacing(3),
    whiteSpace: "nowrap"
  }
});

const Footer = withStyles(styles)(props => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: { email, phone }
        }
      }
    }
  } = props;
  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <span>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {title} <br />
            <a
              href="https://www.google.com/maps/d/viewer?ie=UTF8&hl=en&msa=0&ll=38.70694600000002%2C-90.236206&spn=0.85732%2C1.098633&z=8&source=embed&mid=1Imax3L2Z7IkzD-u8P6Qf0VT6Nak"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              123 Chestnut Street
            </a>{" "}
            |{" "}
            <a href={"mailto:" + email} style={{ color: "white" }}>
              {email}
            </a>{" "}
            |
            <a href={"tel:" + phone} style={{ color: "white" }}>
              {" "}
              {phone}
            </a>
          </Typography>
        </span>
      </footer>
    </>
  );
});

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
