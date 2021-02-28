import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/404.vue'
import Login from './views/Login.vue'
import Info from './views/Info.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path:'/:pathMatch(.*)*', component: NotFound },
    { path: '/login', component: Login },
    { path: '/info', component: Info}
  ]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})