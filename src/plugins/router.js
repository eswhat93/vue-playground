import { createWebHistory,createRouter } from 'vue-router'


const routes = [
    {
        path:'/',
        // redirect:"/main",
        component: () => import('@/views/MainPage.vue')
    },
    {
        path:'/login',
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path:'/signup',
        component: () => import('@/views/SignupPage.vue') 
    },
    {   
        path:'/todo',
        component: () => import('@/views/TodoPage.vue')
    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component: () => import('@/views/NotFoundPage.vue') 
    }
]

export default new createRouter({
    history:createWebHistory(),
    routes
})