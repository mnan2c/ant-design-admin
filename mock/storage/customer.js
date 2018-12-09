import Mock from 'mockjs';

const { Random } = Mock;

export default {
  'GET /api/customers': Mock.mock({
    'content|66': [
      {
        'id|+1': 20060,
        name: () => Random.name(),
        address: () => Random.county(),
        contact: () => Random.cname(),
        cellphoneNumber: () => Random.natural(10000000000, 19999999999),
        description: () => Random.csentence(2, 8),
        email: () => Random.email(),
        date: () => Random.date(),
      },
    ],
    totalElements: 66,
  }),
};
