<template>
    <AppHeader/>
    <router-view></router-view>
    
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'


export default  {
  components:{
    AppHeader,
  },
}
</script>



