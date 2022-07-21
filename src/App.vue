<template>
    <AppHeader></AppHeader>
    <TodoItem @addTodoItem="addTodoItem"></TodoItem>
    <TodoItemList 
    :todoItems="todoItems"
    @removeItem="removeItem"
    @toggleComplete="toggleComplete"
    ></TodoItemList>
    <AppFooter @clearAll="clearAll"></AppFooter>
    <!-- <router-view></router-view> -->
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoItemList from '@/components/TodoItemList.vue'
import AppFooter from '@/components/common/AppFooter.vue'

export default  {
  components:{
    AppHeader,
    TodoItem,
    TodoItemList,
    AppFooter
  },
  data(){
    return{
      todoItems:[]
    }
  }
  
}
</script>



