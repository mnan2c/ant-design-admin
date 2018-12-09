import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function queryInStorages(params) {
  return request(`/api/instorages${getQueryString(params)}`);
}
