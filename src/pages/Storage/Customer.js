import React from 'react';
// import Link from 'umi/link';
import { Card, Spin, Button } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';

import CTable from '@/components/Clemon/CTable';
import CEmptyPlaceholder from '@/components/Clemon/CEmptyPlaceholder';
import { queryCustomers } from '@/services/storage/customer';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const tableColumns = [
  {
    title: formatMessage({ id: 'id' }),
    dataIndex: 'id',
  },
  {
    title: formatMessage({ id: 'name' }),
    dataIndex: 'name',
  },
  {
    title: formatMessage({ id: 'address' }),
    dataIndex: 'address',
  },
  {
    title: formatMessage({ id: 'contact' }),
    dataIndex: 'contact',
  },
  {
    title: formatMessage({ id: 'phone' }),
    dataIndex: 'cellphoneNumber',
  },
  {
    title: formatMessage({ id: 'description' }),
    dataIndex: 'description',
  },
  {
    title: formatMessage({ id: 'email' }),
    dataIndex: 'email',
  },
  {
    title: formatMessage({ id: 'createdDate' }),
    dataIndex: 'date',
  },
];

// search: id, name, type, phone
// export
// tabs
// actions: edit, more
// inline edit
class Customer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      PList: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      loading: false,
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate(prevProps, prevState) {
    const { pagination } = this.state;
    const { pagination: prevPagination } = prevState;
    if (
      pagination.current !== prevPagination.current ||
      pagination.pageSize !== prevPagination.pageSize
    ) {
      this.refreshList();
    }
  }

  handleTableChange = newPagination => {
    this.setState(prevState => ({
      pagination: {
        ...prevState.pagination,
        current: newPagination.current,
        pageSize: newPagination.pageSize,
      },
    }));
  };

  refreshList() {
    const { pagination } = this.state;
    this.setState({ loading: true });
    queryCustomers({
      page: pagination.current - 1,
      size: pagination.pageSize,
      sort: 'createdDate,desc',
    })
      .then(resp => {
        this.setState(prevState => ({
          PList: resp.content,
          pagination: { ...prevState.pagination, total: resp.totalElements },
          loading: false,
        }));
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { PList, pagination, loading } = this.state;
    return (
      <PageHeaderWrapper>
        <Card
          bordered={false}
          title={
            <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
              <FormattedMessage id="operation.create" />
            </Button>
          }
        >
          <Spin spinning={loading}>
            {!loading && PList.length === 0 ? (
              <CEmptyPlaceholder showIcon />
            ) : (
              <CTable
                dataSource={PList}
                pagination={pagination}
                columns={tableColumns}
                onChange={this.handleTableChange}
              />
            )}
          </Spin>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Customer;
