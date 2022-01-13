import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import bootstrap from './bootstrap'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import HomeComponent from './pages/Home/HomeComponent'
import AdminComponent from './pages/Admin/AdminComponent'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(bootstrap);
Vue.use(BootstrapVue),
    Vue.use(IconsPlugin)

/* criou as rotas */
const routes = [
    { path: '/', component: HomeComponent },
    { path: '/admin', component: AdminComponent }
]

/* estamos instanciando as rotas */
const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')