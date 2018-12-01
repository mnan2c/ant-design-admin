import React from 'react';
import Link from 'umi/link';
import { Card, Spin } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';

import CTable from '@/components/Clemon/CTable';
import CEmptyPlaceholder from '@/components/Clemon/CEmptyPlaceholder';
import { queryWarehouses } from '@/services/basicinfo/warehouse';
// import { convertDateTime } from '@/utils/utils';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const tableColumns = [
  {
    title: formatMessage({ id: 'id' }),
    dataIndex: 'id',
    // render: (val, item) => <Link to={`/management/programmes/${item.id}`}>{val}</Link>,
  },
  {
    title: formatMessage({ id: 'region' }),
    dataIndex: 'region',
  },
  {
    title: formatMessage({ id: 'date' }),
    dataIndex: 'date',
  },
  {
    title: formatMessage({ id: 'type' }),
    dataIndex: 'type',
  },
  {
    title: formatMessage({ id: 'department' }),
    dataIndex: 'department',
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
    title: formatMessage({ id: 'email' }),
    dataIndex: 'email',
  },
  {
    title: formatMessage({ id: 'phone' }),
    dataIndex: 'cellphoneNumber',
  },
];

class Warehouse extends React.PureComponent {
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
    queryWarehouses({
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
          title={formatMessage({ id: 'menu.basicinfo.warehouse' })}
          extra={
            <Link to="/management/programmes/create">
              <FormattedMessage id="create.new" />
            </Link>
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

export default Warehouse;
