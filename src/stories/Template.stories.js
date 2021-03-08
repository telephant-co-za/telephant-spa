import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from '../template/Footer';
import Header from '../template/Header';

storiesOf("Templates/Footer", module)
    .add("default", () => {
            return <Footer />;
          })
storiesOf("Templates/Header", module)
    .add("default", () => {
        return <Header />;
    });