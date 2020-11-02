import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage'
import HelpPage from './components/HelpPage'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '/help', component: HelpPage },
    { path: '/categories/:categoryAlias', component: CategoryPage },
    { path: '/products/:productId', component: ProductPage }
  ],
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
