import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Meeting from '@/pages/Meeting.vue'
import Document from '@/pages/Document.vue'
import Times from '@/pages/Times.vue'

const routes = [
    { path: '/home', name: 'home', component: Home },
    { path: '/', redirect: '/home' },
    { path: '/meeting', name: 'meeting', component: Meeting },
    { path: '/document', name: 'document', component: Document },
    { path: '/times', name: 'times', component: Times }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;