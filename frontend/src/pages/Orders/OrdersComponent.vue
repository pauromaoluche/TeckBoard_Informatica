<template>
    <div>
        <!-- O componente DashboardComponent esta sendo renderizado -->
        <DashboardComponent>
            <!-- Joga o conteudo pro slot-pages que esta dentro do dashboard -->
            <div slot="slot-pages" class="content-pages">
                <header class="title-pages">
                    <p>Pedidos</p>
                </header>
            </div>
        </DashboardComponent>
    </div>
</template>

<script>
/* dashboard vai estar em todas paginas, então devemos importalo */
import DashboardComponent from '../Dashboard/DashboardComponent';

export default {
    name: 'OrdersComponent',
    components: {
        DashboardComponent,
    }

}
</script>

<style scoped>

</style>