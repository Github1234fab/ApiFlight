import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/Home.vue'
import Game from '../views/Game.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MyHome
    },
    {
      path: '/game',
      component: Game
    }
  ]
})

export default router
