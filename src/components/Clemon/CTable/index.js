import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

class CTable extends React.PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    columns: PropTypes.array.isRequired,
    pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
    dataSource: PropTypes.array,
    sortOrder: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    loading: false,
    rowKey: record => record.key || record.id,
    dataSource: undefined,
    sortOrder: undefined,
    onChange: () => {},
  };

  updateColumnSortOrder = columns => {
    const { sortOrder } = this.props;
    if (!sortOrder) {
      return columns;
    }
    const [dataIndex, order] = sortOrder.split(',');
    const newColumns = columns.map(col => {
      if (col.sorter && col.dataIndex === dataIndex) {
        return {
          ...col,
          sortOrder: `${order}end`,
        };
      }
      return {
        ...col,
        sortOrder: false,
      };
    });

    return newColumns;
  };

  render() {
    const { loading, rowKey, columns, pagination, dataSource, onChange, ...restProps } = this.props;

    let paginationProps = pagination;
    if (pagination) {
      paginationProps = {
        showSizeChanger: true,
        showQuickJumper: true,
        ...pagination,
      };
    }
    const columnsProps = this.updateColumnSortOrder(columns);

    return (
      <Table
        loading={loading}
        rowKey={rowKey}
        columns={columnsProps}
        pagination={paginationProps}
        dataSource={dataSource}
        onChange={onChange}
        {...restProps}
      />
    );
  }
}

export default CTable;
