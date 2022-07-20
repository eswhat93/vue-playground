import { createWebHistory,createRouter } from 'vue-router'


const routes = [
    {
        path:'/',
        // component: () => import('../views/home/Main')
    }
]

export const router = new createRouter({
    history:createWebHistory(),
    routes
})