// 该文件是对axios库的二次封装
import axios from 'axios'
// 用于将对象转化为urlencoded字符串
import qs from 'querystring' 
import {message as msg} from 'antd'

// 配置请求的基础路径
axios.defaults.baseURL=''
// 配置超时时间
axios.defaults.timeout=2000
// 请求拦截器
axios.interceptors.request.use((config)=>{
  const {method,data}=config
  // 统一处理post请求json编码问题（转为urlencoded）
  if(method.toLowerCase()==='post' && data instanceof Object){
    config.data=qs.stringify(data)
  }
  // 必须返回配置对象
  return config
})
// 响应拦截器
axios.interceptors.response.use(
  // 成功的回调:以2开头的http状态码都是成功的
  response=>{
    return response.data
  },
  // 失败的回调
  /*
  失败的回调有三种情况
  1.返回的http状态码不是以2开头的
  2.达到了超时的时间
  3.网络问题
  
  */
  err=>{
      let errmsg='未知的错误,请联系管理员'
      const {message}=err
      if(message.indexOf('401')!==-1) errmsg='未登录或身份过期,请重新登录'
      else if(message.indexOf('Network Error')!==-1) errmsg='网络不通,请检查网络连接'
      else if(message.indexOf('timeout')!==-1) errmsg='网络不稳定,连接超时'
      msg.error(errmsg,1)
      return new Promise(()=>{})

  }

)
export default axios