import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
    header:{
        backgroundColor: "#ffffff",
        boxShadow: "none",
    },
    menuButton:{
        color: "#F59F9F",
        fontFamily: "Raleway",
        fontSize: "large",
        textTransform: "lowercase",
        fontWeight: "bold",
    },
}))

const headersData = [
    {
        label: "About",
        href: "/about",
    },

    {
        label: "Resume",
        href: "/resume",
    },

    {
        label: "Projects",
        href: "/projects",
    },

    {
        label: "Gallery",
        href: "/gallery",
    },

    {
        label: "Contact",
        href: "/contact",
    },
]



function Header() {
    const {header, menuButton} = useStyles();
    const makeButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
              <Button
                {...{
                  key: label,
                  color: "inherit",
                  to: href,
                  component: RouterLink,
                  className: menuButton,
                }}
              >
                {label}
              </Button>
            );
          });
    };    
    const displayDesktop = () => {
      return <Toolbar>
          {makeButtons()}
      </Toolbar>;
    };
    
    return (
      <header>
        <AppBar className={header}> {displayDesktop()}</AppBar>
      </header>
    );
  }
  
export default Header