<template>
  <div style="text-align: center">
    <router-link :to="{name:'Login',params:{t:1}}">
      注册
    </router-link>|
    <router-link :to="{name:'Login',params:{t:0}}">
      登录
    </router-link>
  </div>
</template>

<script>
export default {
  name : 'IndexVue',
  mounted() {

  }
}
</script>

<style scoped>

</style>
