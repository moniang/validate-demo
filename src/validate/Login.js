import { Validate } from '@itwmw/form-validate'
import store from '@/store'

class LoginValidate extends Validate {
  constructor() {
    const rule = {
      'user' : 'require|mail|max:30',
      'pass' : 'require|chsDash|length:6,16|check_login',
      'code' : 'require|number|length:6'
    }

    const message = {
      'user.require' : '账号必须填写',
      'user.mail'    : '请填写合法的邮箱账号',
      'user.max'     : '账号过长',
      'pass.require' : '密码必须填写',
      'pass.chsDash' : '密码含有非法字符',
      'pass.length'  : '密码长度为6~16位',
      'code.require' : '安全码必须填写',
      'code.number'  : '安全码必须为数字',
      'code.length'  : '安全码长度为6位数'
    }
    super(rule, message)

    // 如果没有验证场景，默认验证rule中的全部字段
    this.setScene({
      'login' : ['user', 'pass']
    })

    this.setFilter({
      'user' : 'removeSpace',
      'pass' : 'removeSpace'
    })
  }

  // 注册一个Register的自定义验证场景，因为是注册，不需要判断账号密码是否正确，所以这里直接删掉check_login规则
  sceneRegister() {
    return this.only(['user', 'pass', 'code']).remove('pass', 'check_login').append('pass', 'check_register')
  }

  // 注册一个findPassword的自定义验证场景，用来判断安全码是否正确
  sceneFindPassword() {
    return this.only(['user', 'pass', 'code']).remove('pass', 'check_login').append('code', 'check_code')
  }

  // 验证登录，这里其实应该对接接口，但懒得写NodeJs了
  check_login(value, rule, data) {
    for (let i = 0; i < store.getters.account.length; i++) {
      const { user, pass } = store.getters.account[i]
      if (user === data.user && pass === data.pass) {
        return true
      }
    }

    return '账号密码错误'
  }

  // 注册验证，判断是否有相同账号
  check_register(value, rule, data) {
    if (store.getters.account.length === 0) {
      return true
    }

    for (let i = 0; i < store.getters.account.length; i++) {
      const { user } = store.getters.account[i]
      if (user === data.user) {
        return '账号已存在'
      }
    }

    return true
  }

  // 找回密码、修改密码使用 用于判断安全码是否正确
  check_code(value, rule, data) {
    for (let i = 0; i < store.getters.account.length; i++) {
      const { user, code } = store.getters.account[i]
      if (user === data.user && code === data.code) {
        return true
      }
    }
    return '安全码错误'
  }
}

export default LoginValidate
