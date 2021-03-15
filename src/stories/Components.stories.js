import React from 'react';
import { storiesOf } from '@storybook/react';

import DashboardAccountBalance from '../components/DashboardAccountBalance'              
import DashboardActionCard from '../components/DashboardActionCard'       
import DashboardActionCardButton from '../components/DashboardActionCardButton'               
import FooterCopyrightNotice from '../components/FooterCopyrightNotice'  
import FooterSocialLinks from '../components/FooterSocialLinks' 
import HeaderHelpButtonMenu from '../components/HeaderHelpButtonMenu' 
import HeaderLogo from '../components/HeaderLogo' 
import HeaderNotifcationsButtonMenu from '../components/HeaderNotifcationsButtonMenu' 
import HeaderTabs from '../components/HeaderTabs' 
import HeaderUserButtonGroup from '../components/HeaderUserButtonGroup' 
import HeaderUserButtonMenu from '../components/HeaderUserButtonMenu' 
import TransactionsActionCard from '../components/TransactionsActionCard' 
import TransactionsDataGrid from '../components/TransactionsDataGrid' 
import TransactionsPDF from '../components/TransactionsPDF' 
import TransactionsViewPDF from '../components/TransactionsViewPDF' 
import TransactionDetail from '../components/TransactionDetail' 

storiesOf("Components/Dashboard/AccountBalance", module)
    .add("default", () => {
            return <DashboardAccountBalance />;
          })
storiesOf("Components/Dashboard/ActionCard", module)
    .add("default", () => {
        return <DashboardActionCard />;
    })
storiesOf("Components/Dashboard/ActionCardButton", module)
    .add("default", () => {
        return <DashboardActionCardButton />;
    })
storiesOf("Components/Footer/CopyrightNotice", module)
    .add("default", () => {
        return <FooterCopyrightNotice />;
    })
storiesOf("Components/Footer/SocialLinks", module)
    .add("default", () => {
        return <FooterSocialLinks />;
})
storiesOf("Components/Header/HelpButtonMenu", module)
    .add("default", () => {
        return <HeaderHelpButtonMenu />;
})
storiesOf("Components/Header/HeaderLogo", module)
    .add("default", () => {
        return <HeaderLogo />;
})
storiesOf("Components/Header/HeaderNotifcationsButtonMenu", module)
    .add("default", () => {
        return <HeaderNotifcationsButtonMenu />;
})
storiesOf("Components/Header/HeaderTabs", module)
    .add("default", () => {
        return <HeaderTabs />;
})
storiesOf("Components/Header/HeaderUserButtonGroup", module)
    .add("default", () => {
        return <HeaderUserButtonGroup />;
})
storiesOf("Components/Header/HeaderUserButtonMenu", module)
    .add("default", () => {
        return <HeaderUserButtonMenu />;
})
storiesOf("Components/Transactions/TransactionDetail", module)
    .add("default", () => {
        return <TransactionDetail />;
});
storiesOf("Components/Transactions/TransactionsActionCard", module)
    .add("default", () => {
        return <TransactionsActionCard />;
});
storiesOf("Components/Transactions/TransactionsDataGrid", module)
    .add("default", () => {
        return <TransactionsDataGrid />;
});
storiesOf("Components/Transactions/TransactionsPDF", module)
    .add("default", () => {
        return <TransactionsPDF />;
});
storiesOf("Components/Transactions/TransactionsViewPDF", module)
    .add("default", () => {
        return <TransactionsViewPDF />;
});