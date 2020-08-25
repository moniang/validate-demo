<template>
  <div v-if="type !== 1">
    <label>账号：
      <input v-model="login.user" type="email" placeholder="请输入邮箱">
    </label>
    <br>
    <label>密码：
      <input v-model="login.pass" type="password" placeholder="请输入密码">
    </label>
    <br>
    <button type="button" @click="loginHandle">
      登录
    </button>
  </div>
  <div v-else>
    <label>账号：
      <input v-model="register.user" type="email" placeholder="请输入邮箱">
    </label>
    <br>
    <label>密码：
      <input v-model="register.pass" type="password" placeholder="请输入密码">
    </label>
    <br>
    <button type="button" @click="registerHandle">
      确定注册
    </button>
  </div>
</template>

<script>
import LoginValidate from '@/validate/Login'
export default {
  name : 'Login',
  data() {
    return {
      login : {
        user : null,
        pass : null
      },
      register : {
        user : null,
        pass : null
      },
      type : parseInt(this.$route.params.t)
    }
  },
  methods : {
    loginHandle() {
      // 第二个参数为True则表示抛出异常，此处已设置了全局异常处理，所以不需要手动捕获
      LoginValidate.make().setSceneName('login').check(this.login, true)
      this.$store.dispatch('user/setUserInfo', {
        'user' : this.login.user
      })
      this.$router.push({
        name : 'Home'
      })
    },
    registerHandle() {
      const v = new LoginValidate()
      v.setSceneName('register')
      if (!v.check(this.register)) {
        alert(v.getError())
        return false
      }

      this.$store.dispatch('user/setAccount', Object.assign({}, this.register)).then(() => {
        this.type = 0
        this.login.user = this.register.user
        this.register.user = null
        this.register.pass = null
        alert('注册成功，请登录')
      })
    }
  }
}
</script>

<style scoped>

</style>
