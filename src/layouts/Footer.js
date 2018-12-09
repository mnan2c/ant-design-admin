import React, { Fragment } from 'react';
import { Layout } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      copyright={<Fragment>Copyright 2017 - 2018 clemon | Version: 2018.12</Fragment>}
    />
  </Footer>
);
export default FooterView;
