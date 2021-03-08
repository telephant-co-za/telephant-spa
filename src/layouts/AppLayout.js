import React from 'react';
import { Box } from '@material-ui/core';

import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {

  return (
<div
  css={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }}>
  <div
    css={{
      padding: 16
    }}>
    <Header />
  </div>
  <div
    css={{
      flex: '1 1 auto',
      padding: 16
    }}>
  <main></main>
  </div>
  <div
    css={{
      padding: 16
    }}>
    <Footer />
  </div>
</div>
  );
};

export default AppLayout;
