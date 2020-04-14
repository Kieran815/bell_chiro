import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Facebook } from "@material-ui/icons";
import withStyles from "@material-ui/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";
import ServicesButton from "./ServicesButton";
import StoreButton from "./StoreButton";

const styles = theme => ({
  menuButton: {
    color: theme.palette.primary.contrastText
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#0782c8"
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

const Menu = withStyles(styles)(props => {
  const buildClasses = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = event => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const {
    classes,
    data: {
      site: {
        siteMetadata: { menuLinks }
      }
    }
  } = props;

  return (
    <div id="menu-root" style={{ display: "flex", alignItems: "center" }}>
      <ServicesButton />
      <StoreButton />
      <div>
        {menuLinks.map(link => (
          <Link key={link.name} to={link.link}>
            <Button className={classes.menuButton}>{link.name}</Button>
          </Link>
        ))}
        {/* Facebook Link Icon*/}
        <a
          href="https://www.facebook.com/BellChiroStL/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <IconButton>
            <Facebook />
          </IconButton>
        </a>
      </div>
    </div>
  );
});

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
