import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function queryPurchases(params) {
  return request(`/api/purchases${getQueryString(params)}`);
}
