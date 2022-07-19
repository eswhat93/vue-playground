<template>
    <ul class=" items-center space-y-1">
        
        <li
        class="flex justify-between lg:w-2/5 h-20 p-4 mx-auto rounded shadow-lg ml-auto items-center"
        v-for="(todoItem, index) in this.$store.state.todoItems" 
        :key="index"
        >
        <div :class="{'line-through': todoItem.completed }">
            {{todoItem.item}}
        </div>
        <div> 
            <button
            @Click="removeItem(todoItem,index)"
            >🗑</button>
            <button
            @Click="toggleComplete(todoItem,index)"
            >✔</button>
        </div>  
        </li>
        
    </ul>
</template>
<script>
export default{
    methods:{
        removeItem(todoItem,index){
            this.$store.commit('removeItem',{todoItem,index})
        },
        toggleComplete(todoItem,index){
            this.$store.commit('toggleComplete',{todoItem,index})
        }
    }
}
</script>