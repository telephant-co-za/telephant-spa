import React from "react";
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import SocialLinks from '../components/SocialLinks.js';

const Footer = () => <>
        <AppBar position="static" elevation={0} component="footer" color="default">
            <SocialLinks />
            <Toolbar style={{ justifyContent: "center" }}> 
                <Typography variant="caption">
                    &copy; Copyright {new Date().getFullYear()}, <a target="_blank" href="https://www.telephantcloud.com">Telephant Cloud</a>
                    &#8226;
                    <a href="#">Terms &amp; Conditions</a>
                    &#8226;
                    <a href="#">Privacy Policy</a>
                    &#8226;
                    <a href="#">Acceptable Usage</a>
                </Typography>
                
            </Toolbar>
        </AppBar>
    </>

export default Footer;