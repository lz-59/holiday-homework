import request from '@/utils/request'

export const reg = (obj) => {//注册
  return request.post('/api/index.php/home/v1/register',obj)
}

export const login = (obj) => {//登录
  return request.post('/api/index.php/home/v1/login',obj)
}

export const firstData = () => {//默认数据
  return request.get('/api/index.php/home/v5/getuser')
}

export const pages = (obj) => {//分页
  return request.post('/aps/Home/Apis/listWithPage',obj)
}

export const add = (obj) => {//添加
  return request.post('/api/index.php/home/v5/add',obj)
}

export const query = (str) => {//查询
  return request.get(`/api/index.php/home/v5/findUser?keyword=${str}`)
}