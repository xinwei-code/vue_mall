import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 10000
    })

    //axios拦截器

    //请求拦截作用
    instance.interceptors.request.use(config => {
        return config
    })

    //响应拦截作用
    instance.interceptors.response.use(res => {
            return res.data
        },
        err => {
            console.log(err);
        })
    //发送真的网路请求
    return instance(config)
}