<template>
  <div v-if="type === 0">
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
    <button type="button" @click="()=>{type = 2}">
      忘记密码
    </button>
  </div>
  <div v-else-if="type === 1">
    <label>账号：
      <input v-model="register.user" type="email" placeholder="请输入邮箱">
    </label>
    <br>
    <label>密码：
      <input v-model="register.pass" type="password" placeholder="请输入密码">
    </label>
    <br>
    <label>安全码：
      <input v-model="register.code" type="password" placeholder="请输入6位安全码">
    </label>
    <br>
    <button type="button" @click="registerHandle">
      确定注册
    </button>
  </div>
  <div v-else-if="type === 2">
    <label>账号：
      <input v-model="find.user" type="email" placeholder="请输入邮箱">
    </label>
    <br>
    <label>安全码：
      <input v-model="find.code" type="password" placeholder="请输入6位安全码">
    </label>
    <br>
    <label>新密码：
      <input v-model="find.pass" type="password" placeholder="请输入新密码">
    </label>
    <br>
    <button type="button" @click="findPassword">
      重置密码
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
        pass : null,
        code : null
      },
      find : {
        user : null,
        pass : null,
        code : null
      },
      type : parseInt(this.$route.params.t) || 0
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
    findPassword() {
      LoginValidate.make().setSceneName('findPassword').check(this.find, true)
      this.$store.dispatch('user/updateAccount', Object.assign({}, this.find))
      alert('密码重置成功!')
      this.type = 0
      this.find.user = null
      this.find.pass = null
      this.find.code = null
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
        this.register.code = null
        alert('注册成功，请登录')
      })
    }
  }
}
</script>

<style scoped>

</style>
