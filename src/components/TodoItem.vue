<template>
    <div class="justify-center mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class=" inline-flex lg:justify-center ml-5 lg:ml-0">
        <input 
        type="text" 
        v-model="newTodoItem" 
        @keyup.enter="addToDo"
        class="w-1/2 bg-white rounded shadow-lg focus:border-indigo-500 py-1 px-3">
        
        <button 
            @click="addToDo" 
            class="text-white bg-indigo-500 border-0 ml-0.5 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
        할 일 추가
        </button>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'

export default{
    data(){
        return{
            newTodoItem:''
        }
    },
    methods:{
        addToDo(){
            if(this.newTodoItem !== ''){
                this.$store.commit('addTodoItem',this.newTodoItem)
                this.clearInput();
            }else{
                Swal.fire({
                    title: '',
                    text: this.$t('form.check.empty'),
                    icon: 'error',
                    confirmButtonText: this.$t('button.close')
                })
            }
        },
        clearInput(){
            this.newTodoItem = ''
        }
    }
}
</script>