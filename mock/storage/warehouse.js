import Mock from 'mockjs';

const { Random } = Mock;

const department = ['市场部', '电商二部'];

export default {
  'GET /api/warehouses': Mock.mock({
    'content|13': [
      {
        'id|+1': 10045,
        region: () => Random.region(),
        date: () => Random.date(),
        type: '成品仓库',
        'department|1': department,
        address: () => Random.county(),
        contact: () => Random.cname(),
        email: () => Random.email(),
        cellphoneNumber: () => Random.natural(10000000000, 19999999999),
      },
    ],
    totalElements: 13,
  }),
};
