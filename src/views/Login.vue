<template>
  <div>
    <span>账号：</span><input v-model="login.user" type="email" placeholder="请输入邮箱">
    <br>
    <span>密码：</span><input v-model="login.pass" type="password" placeholder="请输入密码">
    <br>
    <button type="button" @click="loginHandle">
      登录
    </button>
    <p style="color: red">
      正确的账号是:test@test.com 密码123456<button type="button" @click="setLogin">
        填入
      </button>
    </p>
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
      }
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
    setLogin() {
      this.login.user = 'test@test.com'
      this.login.pass = '123456'
    }
  }
}
</script>

<style scoped>

</style>
