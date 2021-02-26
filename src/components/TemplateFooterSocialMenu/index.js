import React from 'react';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShareIcon from '@material-ui/icons/Share';

export default function TemplateFooterSocialMenu(props) {
    return (
        <>
        <Typography variant="h6">
            Share With Your Friends and Family
        </Typography>
        <BottomNavigation>
            <BottomNavigationAction label="Recents" value="recents" icon={<FacebookIcon />} />
            <BottomNavigationAction label="Recents" value="recents" icon={<TwitterIcon />} />
            <BottomNavigationAction label="Recents" value="recents" icon={<ShareIcon />} />
        </BottomNavigation>
        </>
    )
};