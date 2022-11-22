import request from '@/utils/request'

export function loginrequest (data) {
  return request.post('/smartdrive/login/verification', data)
}
