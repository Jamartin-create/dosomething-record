import Mock from 'mockjs'
import './modules/test'

// 处理使用mockjs造成的跨域问题
// @ts-ignore
Mock.XHR.prototype.__send = Mock.XHR.prototype.send
// @ts-ignore
Mock.XHR.prototype.send = function (...args: any[]) {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.__send(...args)
}

Mock.setup({
  timeout: '600-1000',
})
