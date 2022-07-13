<template>
    <ul class=" items-center space-y-1">
        
        <li
        class="flex justify-between lg:w-2/5 h-20 p-4 mx-auto rounded shadow-lg ml-auto items-center"
        v-for="(todoItem, index) in todoItems" 
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
    data(){
        return{
            todoItems:[]
        }
    },
    created(){
        if(localStorage.length>0){
            for(let i=0;i<localStorage.length;i++){
                // if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    
                // }
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }
    },
    methods:{
        removeItem(todoItem,index){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        toggleComplete(todoItem,index){
             todoItem.completed = !todoItem.completed;
             localStorage.removeItem(todoItem.item);
             localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }
}
</script>