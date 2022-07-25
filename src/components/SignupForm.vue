<template>
  <form 
  @submit.prevent="submitSignupData"
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
        <label for="userName"
        class="flex justify-between lg:w-2/5 h-10 mx-auto ml-auto items-center"
        >userName </label>
        <input 
        type="text" 
        id="userName" 
        v-model="userName"
        class="flex justify-between lg:w-2/5 h-20 p-4 mx-auto rounded shadow-lg ml-auto items-center"
        />
    </div>
    <div>
        <button 
        type="submit"
        class="flex  lg:w-2/5 h-20 p-4 mx-auto mt-3.5 rounded shadow-lg ml-auto items-center text-white bg-indigo-500 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >{{ signup }}</button>
    </div>
  </form>
</template>

<script>
import {registerUser} from '@/api/index'
export default {
    data(){
        return{
            signup : this.$t('member.signup'),
            userId:'',
            password:'',
            userName:'',
            logMessage:''
        }
    },
    methods:{
        async submitSignupData(){
            const userData = {
                id: this.userId,
                name: this.username,
                password : this.password
            }
            const { data } = await registerUser(userData)
            console.log(data.userName)
            this.logMessage = `${data.userName} 님이 가입되었습니다`;
            this.initForm();
        },
        initForm(){
            this.userId='',
            this.userName='',
            this.password=''
        }
    }
}
</script>

<style>

</style>