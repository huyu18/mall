import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  //axios请求拦截
  instance.interceptors.request.use(config => {
    return config
  },err => {
    return Promise.reject(err)
  })

  //axios响应拦截
  instance.interceptors.request.use(res => {
    return res
  }, err => {
    return Promise.reject(err)
  })

  //发送真正的网络请求
  return instance(config)

}