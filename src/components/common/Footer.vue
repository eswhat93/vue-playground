<template>
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
  export default{
    methods:{
      allRemove(){
        this.$store.commit('clearAll')
      }
    }
  }
</script>