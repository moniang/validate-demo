<template>
  <div>欢迎你 {{ userInfo.user }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name     : 'Home',
  computed : {
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

<style scoped>

</style>
