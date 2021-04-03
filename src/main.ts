import Vue from 'nativescript-vue';
import App from './app/app.component.vue';

import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';

import './styles/main.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

Vue.use(BottomNavigation);

new Vue({
  render: (h) => h('frame', [h(App)]),
}).$start();
