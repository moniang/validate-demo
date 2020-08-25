import Obj from 'obj-wm'
const KEY = 'test-validate'

export function getData(name = null, defaults = {}) {
  const data = localStorage.getItem(KEY)
  return Obj.get(data, name, defaults)
}

export function setData(name, value = {}) {
  let data = localStorage.getItem(KEY) || {}
  if (!(data instanceof Object)) {
    data = {}
  }
  Obj.set(data, name, value)
  localStorage.setItem(KEY, data)
}

export function clearData() {
  localStorage.setItem(KEY, {})
}

export function delData(name = null) {
  const data = localStorage.getItem(KEY)
  Obj.set(data, name, null)
  localStorage.setItem(KEY, data)
}
