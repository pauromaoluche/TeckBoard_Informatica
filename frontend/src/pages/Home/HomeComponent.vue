<template>
    <div>
        <!-- O componente DashboardComponent esta sendo renderizado -->
        <DashboardComponent></DashboardComponent>
    </div>
</template>

<script>
/* dashboard vai estar em todas paginas, então devemos importalo */
import DashboardComponent from '../Dashboard/DashboardComponent';

export default {
    components: {
        DashboardComponent,
    }

}
</script>

<style scoped>

</style>