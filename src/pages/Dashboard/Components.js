import React from 'react';
// import Link from 'umi/link';
import { Card } from 'antd';
import { FormattedMessage } from 'umi/locale';

import CTable from '@/components/Clemon/CTable';
import CEmptyPlaceholder from '@/components/Clemon/CEmptyPlaceholder';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class Components extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { PList, pagination } = this.state;

    const PList1 = [];

    return (
      <PageHeaderWrapper>
        <Card bordered={false} title={<FormattedMessage id="create" />}>
          {PList1.length === 0 ? (
            <CEmptyPlaceholder showIcon />
          ) : (
            <CTable dataSource={PList} pagination={pagination} onChange={this.handleTableChange} />
          )}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Components;
