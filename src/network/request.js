import axios from "axios";

//使用axios的拦截器
//这个是
// axios.interceptors.request.use(config => {
//   console.log("全局请求成功拦截")
//   return config
// }, err => {
//   console.log("全局请求失败拦截")
// });
// axios.interceptors.response.use(res => {
//   console.log("全局响应成功拦截")
//   return res
// }, err => {
//   console.log("全局响应失败拦截")
// });

// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: "http://wthrcdn.etouch.cn/weather_mini",
//     timeout: 5000
//   })
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }

//也可以将success和failure放到config对象中，用的时候直接传递对象即可
// export function request(myconfig) {
//   const instance = axios.create({
//     baseURL: "http://wthrcdn.etouch.cn/weather_mini",
//     timeout: 5000
//   })
//   instance(myconfig.config).then(res => {
//     myconfig.success(res)
//   }).catch(err => {
//     myconfig.failure(err)
//   })
// }

//配合promise进行封装
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://wthrcdn.etouch.cn/weather_mini",
//       timeout: 5000
//     })
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

//更加简洁的方式，axios本身返回的就是一个promise对象，所以没有必要重新创建一个
export function request(config) {
  const instance = axios.create({
    baseURL: "http://wthrcdn.etouch.cn/weather_mini",
    timeout: 5000
  })

  //配置axios的请求拦截
  instance.interceptors.request.use(config => {
    console.log("请求成功拦截")

    //拦截成功以后，需要把对象返回，否则后续的请求就拿不到config对象了
    return config
  }, err => {
    console.log("请求失败拦截")
  });

  //配置axios的相应拦截
  instance.interceptors.response.use(res => {
    console.log("响应成功拦截")

    //这里可以对数据进行封装转化操作
    //然后只需要将data返回即可
    return res.data
  }, err => {
    console.log("响应失败拦截")
  })
  return instance(config)
}


