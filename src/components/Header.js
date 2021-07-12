import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import pdf from "../Helen_Yang_Resume.pdf";

const useStyles = makeStyles(() => ({
    header:{
        backgroundColor: "#ffcaca",
        boxShadow: "none",
    },
    menuButton:{
        color: "#000000c0",
        fontFamily: "Raleway",
        fontSize: "large",
        textTransform: "lowercase",
        fontWeight: "bold",
    },
}))

const headersData = [
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
          <Button to="/about" component={RouterLink} className={menuButton}>About</Button>
          <Button href={pdf} target="_blank" className={menuButton}>Resume</Button>
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