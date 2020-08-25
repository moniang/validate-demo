import Obj from 'obj-wm'
const KEY = 'test-validate'

export function getData(name = null, defaults = {}) {
  const data = JSON.parse(localStorage.getItem(KEY) || '{}')
  return Obj.get(data, name, defaults)
}

export function setData(name, value = {}) {
  const data = JSON.parse(localStorage.getItem(KEY) || '{}')
  Obj.set(data, name, value)
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function clearData() {
  localStorage.setItem(KEY, undefined)
}

export function delData(name = null) {
  setData(name, null)
}
