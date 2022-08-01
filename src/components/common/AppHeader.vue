<template>
    <div class="text-gray-700 body-font">
    <div class="container mx-auto flex flex-wrap p-5 c md:flex-row items-center">
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <a class="mr-5 hover:text-gray-900">
          <router-link to="/">Home</router-link>
        </a>
        <a class="mr-5 hover:text-gray-900">
          <router-link to="/todo">TODO</router-link>
        </a>
        <a class="mr-5 hover:text-gray-900">profile</a>
        <a class="mr-5 hover:text-gray-900">contact</a>
        <a class="hover:text-gray-900"></a>
      </nav>
      <div class="lg:w-2/5 inline-flex lg:justify-end lg:ml-0">
        <template v-if="isUserLogin">
          <span>{{ userId }}</span>
        </template>
        <template v-else>
          <button class="inline-flex items-center bg-gray-200 border-0 mx-1 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            <router-link to="/login">{{ login }}</router-link>
          </button>
          <button class="inline-flex items-center bg-gray-200 border-0 mx-1 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            <router-link to="/signup">{{ signup }}</router-link>
          </button>
        </template>
      </div>
      <a class="flex order-first lg:order-none lg:w-1/12 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-end mb-4 md:mb-0">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl"></span>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        login : this.$t('member.login'),
        signup : this.$t('member.signup'),
        userId : this.$store.state.auth.userId
      }
    },
    computed:{
      isUserLogin(){
        console.log(this.$store)
        return this.$store.getters['auth/isLogin']
      }
    }
  }
</script>