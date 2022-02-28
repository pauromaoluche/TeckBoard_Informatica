<template>
    <DashboardAdminComponent>
        <div slot="slot-pages" class="content-pages">
            <div v-if="$route.name == 'admin'">
                <IndexComponent />
            </div>
            <div v-else>
                <router-view></router-view>
            </div>
        </div>
    </DashboardAdminComponent>
</template>

<script>
import DashboardAdminComponent from "./DashboardAdminComponent";
import IndexComponent from "../Pages/Index/IndexComponent.vue";
// const axios = require("axios");

export default {
    name: "AdminIndexComponent",
    data() {
        return {};
    },
    components: {
        DashboardAdminComponent,
        IndexComponent,
    },

    computed: {
        routeName() {
            return this.$route.name;
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    background: #e9ecef;
}
</style>
