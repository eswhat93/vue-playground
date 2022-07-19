<template>
    <Header></Header>
    <Input @addTodoItem="addTodoItem"></Input>
    <List 
    :todoItems="todoItems"
    @removeItem="removeItem"
    @toggleComplete="toggleComplete"
    ></List>
    <Footer @clearAll="clearAll"></Footer>
    <!-- <router-view></router-view> -->
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
  }
  
}
</script>



