import request from '@/utils/request';
import { getQueryString } from '@/utils/utils';

export async function queryOutStorages(params) {
  return request(`/api/outstorages${getQueryString(params)}`);
}
