import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
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
              href="https://www.google.com/maps/place/Bell+Chiropractic+%26+Pain+Management/@38.7936075,-90.328719,16z/data=!4m5!3m4!1s0x0:0x84d05d5cb60a30ee!8m2!3d38.7942955!4d-90.3281231"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              493 RUE ST. FRANCOIS Ste #1A
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
