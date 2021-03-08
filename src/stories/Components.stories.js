import React from 'react';
import { storiesOf } from '@storybook/react';

import DataGrid from '../components/DataGrid';
import DatePicker from '../components/DatePicker';
import ExportCard from '../components/ExportCard';
import FilterCard from '../components/FilterCard';
import Logo from '../components/Logo';
import SocialLinks from '../components/SocialLinks';
import HeaderTabs from '../components/HeaderTabs';
import LogoText from '../components/LogoText';
import UserButtonGroup from '../components/UserButtonGroup'
import HelpButtonMenu from '../components/HelpButtonMenu'
import UserButtonMenu from '../components/UserButtonMenu'
import NotificationsButtonMenu from '../components/NotifcationsButtonMenu'

storiesOf("Components/DataGrid", module)
    .add("default", () => {
            return <DataGrid />;
          })
storiesOf("Components/DatePicker", module)
    .add("default", () => {
        return <DatePicker />;
    })
storiesOf("Components/ExportCard", module)
    .add("default", () => {
        return <ExportCard />;
    })
storiesOf("Components/FilterCard", module)
    .add("default", () => {
        return <FilterCard />;
    })
storiesOf("Components/Logo", module)
    .add("default", () => {
        return <Logo />;
})
storiesOf("Components/SocialLinks", module)
    .add("default", () => {
        return <SocialLinks />;
})
storiesOf("Components/HeaderTabs", module)
    .add("default", () => {
        return <HeaderTabs />;
})
storiesOf("Components/LogoText", module)
    .add("default", () => {
        return <LogoText />;
})
storiesOf("Components/UserButtonGroup", module)
    .add("default", () => {
        return <UserButtonGroup />;
})
storiesOf("Components/HelpButtonMenu", module)
    .add("default", () => {
        return <HelpButtonMenu />;
})
storiesOf("Components/NotificationsButtonMenu", module)
    .add("default", () => {
        return <NotificationsButtonMenu />;
})
storiesOf("Components/UserButtonMenu", module)
    .add("default", () => {
        return <UserButtonMenu />;
});



