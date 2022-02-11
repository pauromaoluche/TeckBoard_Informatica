import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import bootstrap from './bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import HomeComponent from './pages/Home/HomeComponent';
import AdminComponent from './pages/Admin/AdminComponent';
import ProductsComponent from './pages/Products/ProductsComponent';
import ClientsComponent from './pages/Clients/ClientsComponent';
import OrdersComponent from './pages/Orders/OrdersComponent';
import ReportsComponent from './pages/Reports/ReportsComponent';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(bootstrap);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


axios.defaults.baseURL = 'http://localhost:8000/api';

/* criou as rotas */
const routes = [
    { path: '/', name: 'home', component: HomeComponent },
    { path: '/admin', name: 'admin', component: AdminComponent },
    { path: '/produtos', name: 'products', component: ProductsComponent },
    { path: '/clientes', name: 'clients', component: ClientsComponent },
    { path: '/pedidos', name: 'orders', component: OrdersComponent },
    { path: '/relatorios', name: 'reports', component: ReportsComponent },


]

/* estamos instanciando as rotas */
const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')