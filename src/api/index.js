import request from '@/utils/request'

export const login = (obj) => {
  return request.post('/api/index.php/home/v1/login',obj)
}