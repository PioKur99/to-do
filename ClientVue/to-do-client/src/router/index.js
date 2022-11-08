import { createRouter, createWebHistory } from 'vue-router'
const About = () => import('../views/About.vue')
const ToDos = () => import('../views/ToDos.vue')

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'ToDos',
        component: ToDos
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router