import Vue from 'vue'
import VueException from '@itwmw/vue-exception'
import { ValidateException } from '@itwmw/form-validate'

VueException.init(Vue).register(err => {
  if (err instanceof ValidateException) {
    alert(err.getError())
  }
})
