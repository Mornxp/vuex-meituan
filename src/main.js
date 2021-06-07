// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 注册一个全局自定义指令 `v-focus`
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  }
  // inserted(){
  //   console.log('被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。');
  // },
  // update(){
  //   console.log('update');
  // }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
