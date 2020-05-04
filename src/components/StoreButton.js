import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const StoreButton = props => {
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
    data: {
      site: {
        siteMetadata: { itemLinks }
      }
    }
  } = props;

  return (
    <div id="items_btn">
      <Button
        ref={anchorRef}
        color="inherit"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Store
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        style={{ zIndex: "10"}}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {itemLinks.map(item => (
                    <MenuItem onClick={handleClose} key={item.name}>
                      <a href={item.link}>{item.name}</a>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query unitNameQuery {
        site {
          siteMetadata {
            itemLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <StoreButton data={data} />}
  />
);
