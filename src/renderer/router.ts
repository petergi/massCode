import type { RouteRecordRaw } from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router'
import Main from './views/Main.vue'
import Preferences from './views/Preferences.vue'
import Presentation from './views/Presentation.vue'

const history = createWebHistory()
const routes: RouteRecordRaw[] = [
  { path: '/', component: Main },
  { path: '/preferences', component: Preferences },
  { path: '/presentation', component: Presentation }
]

const router = createRouter({ history, routes })

export default router
