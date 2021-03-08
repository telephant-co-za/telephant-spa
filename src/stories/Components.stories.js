import React from 'react';
import { storiesOf } from '@storybook/react';

import DataGrid from '../components/DataGrid';
import DatePicker from '../components/DatePicker';
import ExportCard from '../components/ExportCard';
import FilterCard from '../components/FilterCard';
import Logo from '../components/Logo';
import SocialLinks from '../components/SocialLinks';
import NavLinks from '../components/NavLinks';
import HeaderTabs from '../components/HeaderTabs';
import LogoText from '../components/LogoText'

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
storiesOf("Components/NavLinks", module)
    .add("default", () => {
        let data = [{title: "Hello"}]
        return <NavLinks props = {data} />;
});
storiesOf("Components/HeaderTabs", module)
    .add("default", () => {
        return <HeaderTabs />;
})
storiesOf("Components/LogoText", module)
    .add("default", () => {
        return <LogoText />;
});



