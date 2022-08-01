import axios from 'axios'
import VueCookies from 'vue-cookies'

// console.log(import.meta.env)
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL_DEPLOYMENT,
    headers :{
        'Content-Type': 'application/json',
    }  
}) 

instance.interceptors.request.use(async (config)=>{
    config.timeout = 10000;
    config.headers['x-access-token'] = VueCookies.get('accessToken');
    config.headers['x-refresh-token'] = VueCookies.get('refreshToken');
    return config;
},(error)=>{
    console.log('axios request error : ', error);
    return Promise.reject(error);
})

//response 설정
instance.interceptors.response.use(
     (response) => {
      try {
        return response;
      } catch (err) {
        console.error('[axios.interceptors.response] response : ', err.message);
      }
    },
    async function (error) {
      try {
        //에러에 대한 response 정보
        const errorAPI = error.response.config; //요청했던 request 정보가 담겨있음
        //인증에러 및 재요청이 아닐 경우... (+재요청인데 refreshToken이 있을 경우)
        if (error.response.status == 401 && errorAPI.retry==undefined && VueCookies.get('refreshToken')!=null)  { 
          errorAPI.retry = true; //재요청이라고 추가 정보를 담음
          await store.dispatch('refreshToken'); //로그인 중간 저장소에 있는 토큰 재발급 action을 실행
          return await axios(errorAPI); //다시 axios 요청
        }
      } catch (err) {
        console.error('[axios.interceptors.response] error : ', err.message);
      }
      return Promise.reject(error);
  })


function registerUser(userData){
    // const url ="http://localhost:8080/api/signup"
    return instance.post('/api/signup', userData);
}

function loginUser(userData){
    return instance.post('/api/login', userData);
}

function loginToken(url,data){
    return instance.post(url, data);
}
export {registerUser, loginUser, loginToken};
export const http = instance