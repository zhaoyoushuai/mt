// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store';
import '@/assets/css/main.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.directive('document-click', {
  bind(el,binding,vnode){
    document.addEventListener('click',binding.value,false)
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
