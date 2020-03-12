import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

const components = [
  { name: 'app-contador', path: () => import('./components/Contador.vue') },
  { name: 'app-form', path: () => import('./components/Form.vue') },
  { name: 'app-grid', path: () => import('./components/Grid.vue') },
  { name: 'app-modal', path: () => import('./components/Modal.vue') }
]

components.map(({ name, path }) => {
  Vue.component(name, path)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
