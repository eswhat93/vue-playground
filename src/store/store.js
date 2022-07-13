//import Vue from 'vue' 
import { createStore } from 'vuex'

// use => global 하게 사용하겠다.
//Vue.use(createStore);

//export = > 밖에서 사용가능
export const store = createStore({
    state:{
        msg:'hihi',
        headerText:'TODO it!'
    }
})

