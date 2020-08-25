import { getData, setData } from '@/utils/auth'

const state = {
  userInfo : getData('userInfo')
}

const mutations = {
  SET_USER_INFO(state, info) {
    state.userInfo = info
  }
}

const actions = {
  setUserInfo({ commit }, info) {
    setData('userInfo', info)
    commit('SET_USER_INFO', info)
  }
}
export default {
  namespaced : true,
  state,
  mutations,
  actions
}
