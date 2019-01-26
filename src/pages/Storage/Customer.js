import React from 'react';
// import Link from 'umi/link';
import { Card, Spin, Button, Divider, Input, Icon } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';

import CTable from '@/components/Clemon/CTable';
import CEmptyPlaceholder from '@/components/Clemon/CEmptyPlaceholder';
import { queryCustomers } from '@/services/storage/customer';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { renderTagCol } from '@/utils/utils';
import styles from './style.less';

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

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => () => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleModalVisible = () => {
    console.log('this', this);
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

    const tableColumns = [
      {
        title: formatMessage({ id: 'id' }),
        dataIndex: 'id',
      },
      {
        title: formatMessage({ id: 'name' }),
        dataIndex: 'name',
        render: data => renderTagCol({ data, type: 'link', url: '/storage/customer' }),
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div className={styles.customFilterDropdown}>
            <Input
              ref={ele => (this.searchInput = ele)}
              placeholder="Search name"
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={this.handleSearch(selectedKeys, confirm)}
            />
            <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>
              <FormattedMessage id="search" />
            </Button>
            <Button onClick={this.handleReset(clearFilters)}>
              <FormattedMessage id="reset" />
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#108ee9' : '#aaa' }} />
        ),
        onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            });
          }
        },
        // render: text => {
        //   const { searchText } = this.state;
        //   return searchText ? (
        //     <span>
        //       {text.split(new RegExp(`(${searchText})`, 'gi')).map(
        //         (fragment, i) =>
        //           fragment.toLowerCase() === searchText.toLowerCase() ? (
        //             <span key={i} className="highlight">
        //               {fragment}
        //             </span>
        //           ) : (
        //             fragment
        //           ) // eslint-disable-line
        //       )}
        //     </span>
        //   ) : (
        //     text
        //   );
        // },
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
      {
        title: 'Action',
        key: 'action',
        render: () => (
          <span>
            <a href="javascript:;">
              <FormattedMessage id="edit" />
            </a>
            <Divider type="vertical" />
            <a href="javascript:;">
              <FormattedMessage id="delete" />
            </a>
          </span>
        ),
      },
    ];

    return (
      <PageHeaderWrapper>
        <Card
          bordered={false}
          title={
            <Button icon="plus" type="primary" onClick={() => this.handleModalVisible()}>
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
