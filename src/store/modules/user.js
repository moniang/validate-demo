import { getData, setData } from '@/utils/auth'
import { ValidateRule } from '@itwmw/form-validate'

const state = {
  userInfo : getData('userInfo', {}),
  account  : getData('account', [])
}

const mutations = {
  SET_USER_INFO(state, info) {
    state.userInfo = info
  },
  SET_ACCOUNT(state, user) {
    state.account = user
  }
}

const actions = {
  setUserInfo({ commit }, info) {
    setData('userInfo', info)
    commit('SET_USER_INFO', info)
  },
  setAccount({ commit }, account) {
    return new Promise((resolve) => {
      if (!ValidateRule.isArray(account)) account = [account]

      const _account = state.account
      if (ValidateRule.isArray(_account)) account = _account.concat(account)

      setData('account', account)
      commit('SET_ACCOUNT', account)
      resolve()
    })
  },
  updateAccount({ commit }, account) {
    const _account = state.account
    for (let i = 0; i < _account.length; i++) {
      if (_account[i].user === account.user) {
        _account[i].pass = account.pass
        break
      }
    }
    setData('account', _account)
    commit('SET_ACCOUNT', _account)
  }
}
export default {
  namespaced : true,
  state,
  mutations,
  actions
}
