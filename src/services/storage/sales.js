import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function querySales(params) {
  return request(`/api/sales${getQueryString(params)}`);
}
