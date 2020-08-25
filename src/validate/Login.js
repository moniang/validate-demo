import { Validate } from 'form-validate-wm/index'
class LoginValidate extends Validate {
  constructor() {
    const rule = {
      'user' : 'require|mail|max:30',
      'pass' : 'require|chsDash|length:6,16|check_login'
    }

    const message = {
      'user.require' : '账号必须填写',
      'user.mail'    : '账号填写错误',
      'user.max'     : '账号过长',
      'pass.require' : '密码必须填写',
      'pass.chsDash' : '密码含有非法字符',
      'pass.length'  : '密码长度为6~16位'
    }
    super(rule, message)

    this.setScene({
      'login' : ['user', 'pass']
    })
  }

  // 验证登录，这里其实应该对接接口，但懒得写NodeJs了
  check_login(value, rule, data) {
    if (data.pass === '123456' && data.user === 'test@test.com') {
      return true
    }
    return '账号密码错误'
  }
}

export default LoginValidate
