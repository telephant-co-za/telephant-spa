import React from 'react';
import { storiesOf } from '@storybook/react';

import Dashboard from '../pages/Dashboard';
import Beneficiaries from '../pages/Beneficiaries';
import Transactions from '../pages/Transactions';

storiesOf("Pages/Dashboard", module)
    .add("default", () => {
            return <Dashboard />;
          })
storiesOf("Pages/Beneficiaries", module)
    .add("default", () => {
        return <Beneficiaries />;
    })
storiesOf("Pages/Transactions", module)
    .add("default", () => {
        return <Transactions />;
    });