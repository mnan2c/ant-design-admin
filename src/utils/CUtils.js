import React from 'react';
import { Tag } from 'antd';
import Link from 'umi/link';
import _ from 'lodash';

// Link: data, type, url
// Tag: data, type
export function renderTagCol(params = {}) {
  if (_.isEmpty(params)) return '';

  const tagNode = data => (
    <Tag color="blue" key={data}>
      {data}
    </Tag>
  );

  // record, index
  const { data, type, url } = params;
  switch (type) {
    case 'tag':
      if (_.isArray(data)) {
        return <span>{data.map(tag => tagNode(tag))}</span>;
      }
      return tagNode(data);
    case 'link':
      return <Link to={`${url}`}>{data}</Link>;
    default:
      return data;
  }
}

export * from './Constant';
