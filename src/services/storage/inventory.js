import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function queryInventories(params) {
  return request(`/api/inventories${getQueryString(params)}`);
}
