import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'


const routes = [
    { path: '/home', name: 'home', component: Home },
    { path: '/', redirect: '/home' },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;