import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function queryCustomers(params) {
  return request(`/api/customers${getQueryString(params)}`);
}
