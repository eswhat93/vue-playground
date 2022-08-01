import { createStore } from 'vuex'

import todo from '@/store/todo'
import auth from '@/store/auth'

console.log(auth)

export const store = createStore({
    modules:{
        todo,
        auth  
    }
})

export default store