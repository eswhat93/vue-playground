import VueCookies from 'vue-cookies'
import { http }  from '../api/index'


const state = {
    host: '',
    accessToken:null,
    refreshToken:null,
    userId:''//임시
}, getters = {
    isLogin(state){
        return state.userId !== '' 
    },
    //쿠키에 저장된 토큰 가져오기
    getToken (state) {
        let ac = VueCookies.get('accessToken');
        let rf = VueCookies.get('refreshToken');
        return {        
          access: ac,
          refresh: rf
        };
      }
}, mutations = {
    setUserId(state,payload){
        state.userId = payload.userId;
    },
    loginToken (state, payload){
        VueCookies.set('accessToken',payload.accessToken, '60s');
        VueCookies.set('refreshToken', payload.refreshToken, '1h');
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
    },
    refreshToken(state,payload){// 토큰 재셋팅
        VueCookies.set('accessToken',payload.accessToken, '60s');
        VueCookies.set('refreshToken',payload.refreshToken, '1h');
        state.accessToken = payload.accessToken;
    },
    removeToken(){
      VueCookies.remove('accessToken');
      VueCookies.remove('refreshToken');
    }
},
 actions = {
    login:({commit}, params) => {
        console.log("?")
        return new Promise((resolve, reject) => {
            http.loginToken('/token/access',params).then(res => {
                commit('loginToken', res.data.auth_info)
            })
            .catch(err => {
                console.log(err.message);
                reject(err.message);
            });
        })
    },
    refreshToken:( {commit} ) => { //accessToken 재요청
        return new Promise((resolve, reject)=>{
            http.loginToken('/token/certify').then(res =>{
                commit('refreshToken',res.data.auth_info);
                resolve(res.data.auth_info);
            }).catch(err =>{
                console.log('refreshToken error : ', err.config);
                reject(err.config.data);
            })
        })
    },
    logout:({commit})=>{
        commit('removeToken');
        location.reload();
    }
}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}