import {  request } from "./request";

//获取banner轮播图的数据
export function getBannerData() {
  return request({
    url: "http://wthrcdn.etouch.cn/weather_mini?city=北京"
  })
}
