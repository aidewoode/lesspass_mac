import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';
import Routes from './routes';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = Routes(VueRouter);

new Vue({
  router,
  el: '#js-app',
  render: h => h(App)
});



