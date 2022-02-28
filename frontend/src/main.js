import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import bootstrap from './bootstrap';
import Cookies from 'js-cookie';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

/* routes */
import router from './Routes';
/* routes */

Vue.config.productionTip = false
Vue.use(Cookies);
Vue.use(bootstrap);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


axios.defaults.baseURL = 'http://localhost:8000/api';

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')