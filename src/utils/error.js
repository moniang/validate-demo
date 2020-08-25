import Vue from 'vue'
import { ValidateException } from 'form-validate-wm/index'

Vue.config.errorHandler = function(err) {
  if (err instanceof ValidateException) {
    alert(err.getError())
  }
}
