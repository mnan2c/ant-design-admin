import React from 'react';
import Link from 'umi/link';
import { Card, Spin, Radio, Input, Button } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';

import CTable from '@/components/Clemon/CTable';
import CEmptyPlaceholder from '@/components/Clemon/CEmptyPlaceholder';
import { querySuppliers } from '@/services/storage/supplier';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './style.less';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { Search } = Input;

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
    title: formatMessage({ id: 'type' }),
    dataIndex: 'type',
  },
  {
    title: formatMessage({ id: 'phone' }),
    dataIndex: 'cellphoneNumber',
  },
  {
    title: formatMessage({ id: 'email' }),
    dataIndex: 'email',
  },
  {
    title: formatMessage({ id: 'contact' }),
    dataIndex: 'contact',
  },
  {
    title: formatMessage({ id: 'address' }),
    dataIndex: 'address',
  },
  {
    title: formatMessage({ id: 'createdDate' }),
    dataIndex: 'date',
  },
  {
    title: formatMessage({ id: 'description' }),
    dataIndex: 'description',
  },
];

// search: id, name, type, phone
// export
// tabs
// actions: edit, more
// inline edit
class Supplier extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      PList: [],
      pagination: {
        current: 0,
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
    querySuppliers({
      page: pagination.current,
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

    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue="all">
          <RadioButton value="all">
            <FormattedMessage id="all" />
          </RadioButton>
          <RadioButton value="virtual">
            <FormattedMessage id="supplier.type.virtual" />
          </RadioButton>
          <RadioButton value="cooperation">
            <FormattedMessage id="supplier.type.cooperation" />
          </RadioButton>
        </RadioGroup>
        <Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} />
      </div>
    );

    return (
      <PageHeaderWrapper>
        <Card
          bordered={false}
          title={
            <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
              <FormattedMessage id="operation.create" />
            </Button>
          }
          extra={<Link to="/management/programmes/create">{extraContent}</Link>}
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

export default Supplier;
