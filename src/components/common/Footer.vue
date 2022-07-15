<template>
  <div>
    <span 
    class="text-white bg-red-500 border-0 ml-0.5 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
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
        this.$emit('clearAll');
        localStorage.clear();
      }
    }
  }
</script>