import request from '@/utils/request'

export const reg = (obj) => {//注册
  return request.post('/api/index.php/home/v1/register',obj)
}

export const login = (obj) => {//登录
  return request.post('/api/index.php/home/v1/login',obj)
}