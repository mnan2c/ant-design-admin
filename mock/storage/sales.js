import Mock from 'mockjs';

const { Random } = Mock;
const productName = ['高功率电源', '东方亮有机小米500G纸'];
const supplier = ['长城信息', '国科微'];
const status = ['全部出货', '部分出货', '订单确认'];
const unit = ['托', '袋', '箱', '千克', '捆'];
export default {
  'GET /api/sales': Mock.mock({
    'content|55': [
      {
        'id|+1': 20060,
        orderId: () => `AA${Random.natural(1000000, 1999999)}`,
        'productName|1': productName,
        productId: () => Random.natural(1000000, 1999999),
        unitPrice: () => `￥${Random.integer(10, 100)}`,
        'unit|1': unit,
        amount: () => Random.integer(100, 200),
        'customer|1': supplier,
        'customerId|+1': 50800,
        totalAmount: () => Random.integer(10000, 20000),
        'status|1': status,
      },
    ],
    totalElements: 55,
  }),
};
