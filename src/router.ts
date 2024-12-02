import { createWebHashHistory, createRouter } from 'vue-router'


import feedback from './pages/Feedback.vue'
import thanks from './pages/Thanks.vue'

const routes = [
  { name:'feedback',path: '/', component: feedback },
  { name:'thanks',path: '/thanks/:rate', component: thanks },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})