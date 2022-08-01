import { createWebHistory,createRouter } from 'vue-router'
import VueCookies from 'vue-cookies'

const routes = [
    {
        path:'/',
        // redirect:"/main",
        name:'Main',
        component: () => import('@/views/MainPage.vue')
    },
    {
        path:'/login',
        name:'Login',
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path:'/signup',
        name:'Signup',
        component: () => import('@/views/SignupPage.vue') 
    },
    {   
        path:'/todo',
        name:'Todo',
        component: () => import('@/views/TodoPage.vue'),
        beforeEnter:  async(to, from, next)=>{
            /**
             * to: 이동할 url 정보가 담긴 라우터 객체
             * from: 현재 url 정보가 담긴 라우터 객체
             * next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
             * next() 가 호출되기 전까지 화면 전환되지 않음
             */
            if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') !== null){
                //refreshToken은 있고 accessToken이 없을 경우 토큰 재발급 요청
                await store.dispatch('refreshToken');
            }
            if (VueCookies.get('accessToken')){
                //accessToken이 있을 경우 진행
                return next();
            }
            if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') === null){
                //2개 토큰이 모두 없을 경우 로그인페이지로
                console.log(VueCookies)
                return next({name: 'Login'});
            }
            return next();
        }
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