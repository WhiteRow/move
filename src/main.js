import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import '@/styles/app.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
