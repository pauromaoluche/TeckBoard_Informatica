import Vue from 'vue';
import VueRouter from 'vue-router';
import Guard from '../services/middleware';
import HomeComponent from '../pages/Home/HomeComponent';
import LoginAdminComponent from '../admin/Pages/Login/LoginAdminComponent';
import AdminIndexComponent from '../admin/Dashboard/AdminIndexComponent';


import ServicesComponent from '../pages/Services/ServicesComponent';
import OrdersComponent from '../pages/Orders/OrdersComponent';
import ReportsComponent from '../pages/Reports/ReportsComponent';

/* criou as rotas */
Vue.use(VueRouter);
const routes = [
    { path: '/', name: 'home', component: HomeComponent },
    {
        path: '/admin',
        name: 'login',
        component: LoginAdminComponent,
        beforeEnter: Guard.redirectIfAuthenticated,
        // children: [{
        //     path: 'dashboard',
        //     name: 'index',
        //     component: AdminIndexComponent,
        //     beforeEnter: Guard.auth,
        // }]
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminIndexComponent,
        beforeEnter: Guard.auth,
        children: [{
            path: 'clientes',
            name: 'clients',
            component: () => import('../admin/Pages/Clients/ClientsComponent'),
            beforeEnter: Guard.auth,
            children: [{
                path: 'adicionar',
                name: 'addclients',
                component: () => import('../admin/Pages/Clients/AddClientsComponent'),
                beforeEnter: Guard.auth,
            }]
        }]
    },

    { path: '/servicos', name: 'services', component: ServicesComponent },
    // {
    //     path: '/clientes',
    //     name: 'clients',
    //     component: ClientsComponent,
    //     meta: {
    //         title: 'Clientes'
    //     },
    // },
    { path: '/pedidos', name: 'orders', component: OrdersComponent },
    { path: '/relatorios', name: 'reports', component: ReportsComponent },
]

/* estamos instanciando as rotas */
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router