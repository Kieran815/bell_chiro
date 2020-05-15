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
