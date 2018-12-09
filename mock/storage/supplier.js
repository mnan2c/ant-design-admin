import Mock from 'mockjs';

const { Random } = Mock;

const type = ['合作供应商', '虚拟供应商'];

export default {
  'GET /api/suppliers': Mock.mock({
    'content|143': [
      {
        'id|+1': 31002,
        name: () => Random.name(),
        'type|1': type,
        cellphoneNumber: () => Random.natural(10000000000, 19999999999),
        email: () => Random.email(),
        contact: () => Random.cname(),
        address: () => Random.county(),
        date: () => Random.date(),
        description: () => Random.csentence(2, 8),
      },
    ],
    totalElements: 143,
  }),
};
