import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function querySuppliers(params) {
  return request(`/api/suppliers${getQueryString(params)}`);
}
