/*
 * @Author: 夏天 542483954@qq.com
 * @Date: 2022-05-20 16:37:23
 * @LastEditors: 夏天 542483954@qq.com
 * @LastEditTime: 2022-05-23 14:24:18
 * @FilePath: /mydemo/vue-music/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '../views/recommend.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Recommend
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
