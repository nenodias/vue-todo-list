// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'
import App from './App'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
    <div id="app">
      <transition name="fade" mode="out-in">
        <!-- componente será mostrado aqui -->
        <router-view class="view"></router-view>
      </transition>
    </div>
  `,
  router,
  components: { App }
})
