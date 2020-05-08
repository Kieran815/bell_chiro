import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import { Facebook } from "@material-ui/icons"


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", maxWidth: "100vw", flexWrap: "nowrap"}}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{ color: "white" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><a  href="/products/services">Services</a></MenuItem>
        <MenuItem onClick={handleClose}><a  href="/products/items">Shop</a></MenuItem>
        <MenuItem onClick={handleClose}><a  href="/team">About</a></MenuItem>
      </Menu>
      <a
        href="https://www.facebook.com/BellChiroStL/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton>
          <Facebook style={{ color: "white" }} />
        </IconButton>
      </a>
    </div>
  );
}




// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import { Facebook } from "@material-ui/icons";
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 5
//   },
//   title: {
//     flexGrow: 1
//   }
// }));
//
// export default function ButtonAppBar() {
//   const classes = useStyles();
//
//   return (
//     <div className={classes.root}>
//       <Toolbar>
//         <IconButton
//           edge="start"
//           className={classes.menuButton}
//           color="inherit"
//           aria-label="menu"
//         >
//           <MenuIcon />
//         </IconButton>
//         <a
//           href="https://www.facebook.com/BellChiroStL/"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "white" }}
//         >
//           <IconButton>
//             <Facebook />
//           </IconButton>
//         </a>
//       </Toolbar>
//     </div>
//   );
// }
//
{ /* // // *** Original MenuMobile.js content
//
// // import React from "react";
// // import { StaticQuery, Link, graphql } from "gatsby";
// // import Menu from "@material-ui/core/Menu";
// //
// // import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// // import IconButton from "@material-ui/core/IconButton";
// // import { DotsVertical } from "mdi-material-ui";
// // import withStyles from "@material-ui/styles/withStyles";
// //
// // const styles = {
// //   dotsVerticalIcon: {
// //     color: "#efefef"
// //   }
// // };
// //
// // class MenuMobile extends React.Component {
// //   state = {
// //     anchorEl: null
// //   };
// //
// //   handleOpen = event => {
// //     this.setState({ anchorEl: event.currentTarget });
// //   };
// //
// //   handleClose = () => {
// //     this.setState({ anchorEl: null });
// //   };
// //
// //   render() {
// //     const { anchorEl } = this.state;
// //     const {
// //       classes,
// //       data: {
// //         site: {
// //           siteMetadata: { menuLinks }
// //         }
// //       }
// //     } = this.props;
// //     return (
// //       <>
// //         <IconButton onClick={this.handleOpen}>
// //           <DotsVertical className={classes.dotsVerticalIcon} />
// //         </IconButton>
// //         <ClickAwayListener onClickAway={this.handleClose}>
// //           <Menu
// //             anchorEl={anchorEl}
// //             open={Boolean(anchorEl)}
// //             onClose={this.handleClose}
// //           >
// //             {menuLinks.map(link => (
// //               <Link key={link.name} to={link.link}>
// //                 <MenuItem>{link.name}</MenuItem>
// //               </Link>
// //             ))}
// //             <a
// //               href="https://www.facebook.com/BellChiroStL/"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               <MenuItem>Visit Us on Facebook</MenuItem>
// //             </a>
// //           </Menu>
// //         </ClickAwayListener>
// //       </>
// //     );
// //   }
// // }
// //
// // const StyledMenuMobile = withStyles(styles)(MenuMobile);
// //
// // export default props => (
// //   <StaticQuery
// //     query={graphql`
// //       query MenuMobileQuery {
// //         site {
// //           siteMetadata {
// //             menuLinks {
// //               name
// //               link
// //             }
// //             serviceLinks {
// //               name
// //               link
// //             }
// //           }
// //         }
// //       }
// //     `}
// //     render={data => <StyledMenuMobile active={props.active} data={data} />}
// //   />
// // );
*/ }
