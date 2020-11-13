import Vue from 'vue'
import App from './App'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})


//封装request模块
import {request} from './network/request'
request({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})


// request({
//   url: '/home/multidata'  //传config
// }, res => {
//   console.log(res);       //传success函数
// }, err => {
//   console.log(err);
// })



//使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeOut = 5
// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 2
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// //创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


// axios({
//   //默认情况下，传get方法,所以可以不写method:'get'
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   //默认情况下，传get方法,所以可以不写method:'get'
//   // url: 'http://123.207.32.32:8000/home/data?type=sell&page=2',
//   url: 'http://123.207.32.32:8000/home/data',
//   //params是专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 2
//   },
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })




// axios发送并发请求：
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 2
//   }
// })]).then(results => {
//   console.log(results);
// })

// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 2
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))