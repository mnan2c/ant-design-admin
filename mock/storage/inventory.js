import Mock from 'mockjs';

const { Random } = Mock;

const productName = [
  '高功率电源',
  '东方亮有机小米500G纸',
  '无线模组',
  '黑芝麻',
  '东方亮富硒小米500G',
];
const type = ['成品', '豆类', '富硒'];
const unit = ['托', '袋', '箱', '千克', '捆'];
export default {
  'GET /api/inventories': Mock.mock({
    'content|55': [
      {
        'productName|1': productName,
        productId: () => Random.natural(1000000, 1999999),
        'type|1': type,
        warehouse: () => Random.region(),
        amount: () => Random.integer(100, 500),
        'unit|1': unit,
      },
    ],
    totalElements: 55,
  }),
};
