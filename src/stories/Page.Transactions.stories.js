import React from 'react';

import { Page } from '../components/Page.Transactions.js';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Page/Transactions',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};