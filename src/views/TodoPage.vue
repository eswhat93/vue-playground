<template>
    <TodoItem @addTodoItem="addTodoItem"></TodoItem>
    <TodoItemList 
    :todoItems="todoItems"
    @removeItem="removeItem"
    @toggleComplete="toggleComplete"
    @clearAll="clearAll"
    ></TodoItemList>
</template>
<script>
import TodoItem from '@/components/TodoItem.vue'
import TodoItemList from '@/components/TodoItemList.vue'

export default  {
  components:{
    TodoItem,
    TodoItemList,
  },
  data(){
    return{
      todoItems:[]
    }
  }
  
}
</script>