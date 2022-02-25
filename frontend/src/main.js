import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import store from '@/store/index';
import bootstrap from './bootstrap';


import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import HomeComponent from './pages/Home/HomeComponent';
import AdminComponent from './pages/Admin/AdminComponent';
import ServicesComponent from './pages/Services/ServicesComponent';
import ServicesAddComponent from './pages/Services/ServicesAddComponent'
import ClientsComponent from './pages/Clients/ClientsComponent';
import ClientsAddComponent from './pages/Clients/ClientsAddComponent';
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
    {
        path: '/servicos',
        name: 'services',
        component: ServicesComponent,
        children: [{
            path: 'adicionar',
            name: 'add',
            component: ServicesAddComponent,
        }]
    },
    {
        path: '/clientes',
        name: 'clients',
        component: ClientsComponent,
        children: [{
            path: 'adicionar',
            name: 'add',
            component: ClientsAddComponent,
        }]
    },
    { path: '/pedidos', name: 'orders', component: OrdersComponent },
    { path: '/relatorios', name: 'reports', component: ReportsComponent },
]

/* estamos instanciando as rotas */
const router = new VueRouter({
    routes
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')