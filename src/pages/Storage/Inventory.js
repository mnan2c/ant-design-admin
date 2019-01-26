import React from 'react';
// import Link from 'umi/link';
import { Card, Spin, Button } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';

import CTable from '@/components/Clemon/CTable';
import CEmptyPlaceholder from '@/components/Clemon/CEmptyPlaceholder';
import { queryInventories } from '@/services/storage/inventory';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { renderTagCol } from '@/utils/utils';

const tableColumns = [
  {
    title: formatMessage({ id: 'productName' }),
    dataIndex: 'productName',
  },
  {
    title: formatMessage({ id: 'productId' }),
    dataIndex: 'productId',
  },
  {
    title: formatMessage({ id: 'type' }),
    dataIndex: 'type',
    render: data => renderTagCol({ data, type: 'tag' }),
    filters: [
      {
        text: '豆类',
        value: '豆类',
      },
      {
        text: '富硒',
        value: '富硒',
      },
      {
        text: '成品',
        value: '成品',
      },
    ],
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
  {
    title: formatMessage({ id: 'warehouse' }),
    dataIndex: 'warehouse',
  },
  {
    title: formatMessage({ id: 'amount' }),
    dataIndex: 'amount',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: formatMessage({ id: 'unit' }),
    dataIndex: 'unit',
    render: data => renderTagCol({ data, type: 'tag' }),
    filters: [
      {
        text: '托',
        value: '托',
      },
      {
        text: '袋',
        value: '袋',
      },
    ],
    onFilter: (value, record) => record.unit.indexOf(value) === 0,
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
    queryInventories({
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
            <Button
              icon="plus"
              type="primary"
              // onClick={() => this.handleModalVisible(true)}
            >
              <FormattedMessage id="create" />
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
