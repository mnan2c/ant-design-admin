import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function queryWarehouses(params) {
  return request(`/api/warehouses${getQueryString(params)}`);
}

export async function queryWarehouses2(params) {
  return request(`/api/warehouses${getQueryString(params)}`);
}
