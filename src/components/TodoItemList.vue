<template>
    <ul class=" items-center space-y-1">
        
        <li
        class="flex justify-between lg:w-2/5 h-20 p-4 mx-auto rounded shadow-lg ml-auto items-center"
        v-for="(todoItem, index) in this.storedTodoItems" 
        :key="index"
        >
        <div :class="{'line-through': todoItem.completed }">
            {{todoItem.item}}
        </div>
        <div> 
            <button
            @Click="removeItem({todoItem,index})"
            >🗑</button>
            <button
            @Click="toggleComplete({todoItem,index})"
            >✔</button>
        </div>  
        </li>
        
    </ul>
    <div class="container grid justify-items-center mx-auto flex flex-wrap p-5 c md:flex-row items-center">
    <span 
    class="lg:w-2/5 inline-flex lg:justify-center ml-5 lg:ml-0 text-white bg-red-500 border-0 ml-0.5 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
    @click="allRemove"
    >
      clear All
    </span>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default{
    methods:{
        ...mapMutations({
            removeItem:'removeItem',
            toggleComplete : 'toggleComplete'
        }),
        allRemove(){
        this.$store.commit('clearAll')
      }
    },
    computed:{
        ...mapGetters(['storedTodoItems'])
    }
}
</script>