import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './utils/error'
import store from './store'
Vue.config.productionTip = false

router.beforeEach(async(to, from, next) => {
  document.title = to.meta.title
  const user = store.getters.userInfo.user || false
  if (user) {
    next()
  } else {
    if (['Login', 'Index'].indexOf(to.name) !== -1) {
      next()
    } else {
      next({
        name : 'Login'
      })
    }
  }
})

new Vue({
  router,
  store,
  render : h => h(App)
}).$mount('#app')
