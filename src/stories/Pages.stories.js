import React from 'react';
import { storiesOf } from '@storybook/react';

import Dashboard from '../pages/Dashboard';
import Contacts from '../pages/Contacts';
import Transactions from '../pages/Transactions';

storiesOf("Pages/Dashboard", module)
    .add("default", () => {
            return <Dashboard />;
          })
storiesOf("Pages/Contacts", module)
    .add("default", () => {
        return <Contacts />;
    })
storiesOf("Pages/Transactions", module)
    .add("default", () => {
        return <Transactions />;
    });