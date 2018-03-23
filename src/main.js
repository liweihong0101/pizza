import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'
Vue.use(VueRouter);

axios.defaults.baseURL = 'https://wd4561535768olqhyf.wilddogio.com/'
const router = new VueRouter({
  mode: 'history',
  routes,
  // scrollBehavior(to, from, savePosition){
  //     // return {
  //     //     x: 0,
  //     //     y: 100,
  //     // },
  //     // return {selector: '.btn'}
  //     // if(savePosition){
  //     //     return savePosition
  //     // }else{
  //     //     return {
  //     //         x: 0,
  //     //         y: 100,
  //     //     }
  //     // }
  // }
})

//全局守卫
// router.beforeEach((to, from, next) => {
//   //判断store.getters.isLogin === false
//   if (to.path == '/login' || to.path == '/register') {
//     next()
//   } else {
//     alert('还没有登录,请先登录');
//     next('/login');
//   }
// });
// 后置守卫
// router.afterEach((to, from) => {
//   console.log(to);
//   console.log(from)
// });
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
