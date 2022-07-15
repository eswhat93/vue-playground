<template>
    <Header></Header>
    <Input @addTodoItem="addTodoItem"></Input>
    <List 
    :todoItems="todoItems"
    @removeItem="removeItem"
    @toggleComplete="toggleComplete"
    ></List>
    <Footer @clearAll="clearAll"></Footer>
</template>

<script>
import Header from './components/common/Header.vue'
import Input from './components/common/input.vue'
import List from './components/common/list.vue'
import Footer from './components/common/Footer.vue'

export default  {
  components:{
    Header,
    Input,
    List,
    Footer
  },
  data(){
    return{
      todoItems:[]
    }
  },
  methods:{
    addTodoItem(newTodoItem){
      let obj={completed:false,item:newTodoItem};
      localStorage.setItem(newTodoItem,JSON.stringify(obj));
      this.todoItems.push(obj);

      console.log(this.todoItems)
    },
    removeItem(todoItem,index){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
    },
    toggleComplete(todoItem,index){
          todoItem.completed = !todoItem.completed;
          localStorage.removeItem(todoItem.item);
          localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAll(){
      this.todoItems=[];
      localStorage.clear();
    },
  },
  created(){
        if(localStorage.length>0){
            for(let i=0;i<localStorage.length;i++){
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }
    }
}
</script>



