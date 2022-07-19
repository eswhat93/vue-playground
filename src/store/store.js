//import Vue from 'vue' 
import { createStore } from 'vuex'

// use => global 하게 사용하겠다.
//Vue.use(createStore);


const storage = {
    fetch(){
        const arr =[];
        if(localStorage.length>0){
            for(let i=0;i<localStorage.length;i++){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }
        return arr;
    }
}
//export = > 밖에서 사용가능
export const store = createStore({
    state:{
        todoItems:storage.fetch()
    },
    mutations:{
        addTodoItem(state,payload){
            let obj={completed:false,item:payload};
            localStorage.setItem(payload,JSON.stringify(obj));
            state.todoItems.push(obj);
          } ,
        removeItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.todoItem.index,1);
        },
        toggleComplete(state,payload){
          state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
          localStorage.removeItem(payload.todoItem.item);
          localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAll(state,payload){
            state.todoItems=[];
            localStorage.clear();
        }
    },
    actions:{
        
    }
})

