import request from '@/utils/request'

export function uploadfile (data) {
  return request.post('/smartdrive/files/upload/', data)
}

export function submitfileinfo (data) {
  return request.post('/smartdrive/files/submitfileinfo/', data)
}

export function getFileLists (data) {
  return request.post('/smartdrive/files/getfilelist/', data)
}
