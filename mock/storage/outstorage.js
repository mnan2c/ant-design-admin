import Mock from 'mockjs';

const { Random } = Mock;

const productName = ['高功率电源', '东方亮有机小米500G纸'];
const type = ['生产产品入库	', '采购收货入库'];
const supplier = ['长城信息	', '国科微'];
const auditStatus = ['审核成功', '审核失败'];
export default {
  'GET /api/outstorages': Mock.mock({
    'content|55': [
      {
        'id|+1': 20060,
        orderId: () => `AA${Random.natural(1000000, 1999999)}`,
        address: () => Random.county(),
        'productName|1': productName,
        productId: () => Random.natural(1000000, 1999999),
        amount: () => Random.integer(100, 200),
        warehouse: () => Random.region(),
        'type|1': type,
        'supplier|1': supplier,
        auditor: () => Random.cname(),
        auditDate: () => Random.date(),
        'auditStatus|1': auditStatus,
      },
    ],
    totalElements: 55,
  }),
};
