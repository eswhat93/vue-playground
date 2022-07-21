import { createStore } from 'vuex'

import todo from '../store/todo'

export const store = createStore({
    modules:{
        todo,
        
    }
})
