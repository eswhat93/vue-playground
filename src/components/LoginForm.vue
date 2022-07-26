<template>
    <form 
    @submit.prevent="submitLoginData"
    class=" items-center space-y-1"
    >
        <div>
            <label for="userId"
            class="flex justify-between lg:w-2/5 h-10 mx-auto ml-auto items-center"
            >ID </label>
            <input 
            type="text" 
            id="userId" 
            v-model="userId"
            class="flex justify-between lg:w-2/5 h-15 p-4 mx-auto rounded shadow-lg ml-auto items-center"
            />
        </div>
        <div>
            <label for="userId"
            class="flex justify-between lg:w-2/5 h-10 mx-auto ml-auto items-center"
            >PW </label>
            <input 
            type="text" 
            id="password" 
            v-model="password"
            class="flex justify-between lg:w-2/5 h-20 p-4 mx-auto rounded shadow-lg ml-auto items-center"
            />
        </div>
        <div>
            <button 
            type="submit"
            class="flex  lg:w-2/5 h-20 p-4 mx-auto mt-3.5 rounded shadow-lg ml-auto items-center text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >{{ login }}</button>
        </div>
    </form>
    
</template>
<script>
import {loginUser} from '@/api/index'
export default{
    data(){
        return{
            login: this.$t('member.login'),
            userId:'',
            password:''
        }
    },
    methods:{
        async submitLoginData(){
            try{
                const userData = {
                    id:this.userId,
                    password:this.password
                }
                const {data} = await loginUser(userData);
            
                if(data.userName){
                    this.$router.push('/');
                }
                
            }catch(error){
                console.log(error.response.data);
            } finally{
                this.initForm
            }
        },
        initForm(){
            this.userId='',
            this.password=''
        }
    }
}

</script>